import React, {
  ComponentPropsWithoutRef,
  createContext,
  forwardRef,
  PropsWithChildren,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { useControlledState } from '../../hooks/use-controlled-state';
import { useMovablePopup } from '../../hooks/use-movable';
import { useOnEscape } from '../../hooks/use-on-escape';
import { Slot } from '@radix-ui/react-slot';

type ModalProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (openState: boolean) => void;
  closeDisabled?: boolean;
  onCloseDisabledChange?: (disableCloseState: boolean) => void;
};

type ModalContextProps = {
  open: boolean;
  setOpen: (openState: boolean) => void;
  closeDisabled: boolean;
  setCloseDisabled: (disableCloseState: boolean) => void;
  depth: number;
  childModalOpen: boolean;
  setChildModalOpen: (openState: boolean) => void;
} | null;

const ModalContext = createContext<ModalContextProps>(null);
const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal components must be used within a Modal component');
  }
  return context;
};

function Modal({
  children,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  closeDisabled: closeDisabledProp = false,
  onCloseDisabledChange,
  ...props
}: PropsWithChildren<ModalProps>) {
  const parentModal = useContext(ModalContext);

  // 모달의 열림/닫힘 상태 관리
  const [open, setOpen] = useControlledState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  // 모달의 닫힘 비활성화 상태 관리
  const [closeDisabled, setCloseDisabled] = useControlledState({
    prop: closeDisabledProp,
    defaultProp: false,
    onChange: onCloseDisabledChange,
  });

  // 자식 모달의 열림 상태 관리
  const [childModalOpen, setChildModalOpen] = useState(false);

  // 자식이 열려있을 때 close 제거
  useOnEscape(!childModalOpen && open, () => setOpen(false));

  // 부모 모달에게 자식 모달이 열렸음을 알림
  useEffect(() => {
    if (parentModal && open) {
      parentModal.setCloseDisabled(true);
      parentModal.setChildModalOpen(true);
    }
    return () => {
      if (parentModal) {
        parentModal.setChildModalOpen(false);
        parentModal.setCloseDisabled(false);
      }
    };
  }, [open, parentModal]);

  const contextValue = {
    open,
    setOpen,
    closeDisabled: closeDisabled || childModalOpen, // 자식 모달이 열려있으면 닫기 비활성화
    setCloseDisabled,
    depth: parentModal ? parentModal.depth + 1 : 0,
    childModalOpen,
    setChildModalOpen,
  };

  return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
}

type ModalTriggerProps = { asChild?: boolean } & ComponentPropsWithoutRef<'button'>;
const ModalTrigger = forwardRef<HTMLButtonElement, ModalTriggerProps>(function (
  { onClick, className, asChild, ...props },
  forwaredRef,
) {
  const { setOpen, open } = useModalContext();

  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      ref={forwaredRef}
      className={className}
      aria-haspopup="dialog"
      aria-expanded={open}
      onClick={(e) => (onClick?.(e), setOpen(true))}
      {...props}
    />
  );
});
ModalTrigger.displayName = 'ModalTrigger';

function ModalPortal({ children }: ComponentPropsWithoutRef<'div'>) {
  const { open } = useModalContext();
  return open ? createPortal(children, document.body) : null;
}

function ModalOverlay({ ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div {...props} />;
}

type ModalContentProps = ComponentPropsWithoutRef<'div'> & {
  contentDraggable?: boolean;
};

const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(function (
  { onMouseDown: onMouseDownProp, contentDraggable, ...props },
  forwardedRef,
) {
  const { closeDisabled } = useModalContext();
  const { ref, isDragging, onMouseDown } = useMovablePopup(!!contentDraggable && !closeDisabled);
  useImperativeHandle(forwardedRef, () => ref.current ?? ({} as HTMLDivElement), [ref]);

  // TODO: fix error on outside close hook
  // useOutsideClose({ ref: [ref], activate: false, callback: () => setOpen(false) });

  return (
    <div
      aria-pressed={isDragging}
      onMouseDown={(e) => {
        onMouseDownProp?.(e);
        onMouseDown(e);
      }}
      {...props}
      ref={ref}
    />
  );
});
ModalContent.displayName = 'ModalContent';

type ModalCloseProps = { asChild?: boolean } & ComponentPropsWithoutRef<'button'>;
const ModalClose = forwardRef<HTMLButtonElement, ModalCloseProps>(function (
  { onClick, asChild, disabled, ...props },
  forwaredRef,
) {
  const { setOpen, closeDisabled } = useModalContext();

  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      ref={forwaredRef}
      aria-label="modal-close"
      onClick={(e) => {
        onClick?.(e);
        if (!closeDisabled) {
          setOpen(false);
        }
      }}
      disabled={disabled ?? closeDisabled}
      {...props}
    />
  );
});
ModalClose.displayName = 'ModalClose';

export { Modal, ModalClose, ModalContent, ModalOverlay, ModalPortal, ModalTrigger };
