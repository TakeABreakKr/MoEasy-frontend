import React, { ComponentProps, ComponentPropsWithoutRef, useReducer } from 'react';
import { createPortal } from 'react-dom';
import { Slot } from '@radix-ui/react-slot';
import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { contextCreator } from '../../utils/useSafeContext';
import { Button } from '../button';

import * as styles from './alert.css';

type AlertProps = {
  size?: 'small' | 'medium' | 'large';
  isOpen?: boolean;
  open?(): void;
  close?(): void;
  children?: React.ReactNode;
};

type AlertCtxType = {
  size?: 'small' | 'medium' | 'large';
  isOpen?: boolean;
  dispatchOpen: React.Dispatch<'open' | 'close' | 'toggle'>;
};

const [AlertContextProvider, useSelectContext] = contextCreator<AlertCtxType>();

const alertReducer = (state: boolean, type: 'open' | 'close' | 'toggle') => {
  switch (type) {
    case 'open':
      return true;
    case 'close':
      return false;
    case 'toggle':
      return !state;
  }
};

const Alert = ({ children, isOpen: isOpenProp, ...props }: AlertProps) => {
  const [isOpen, dispatchOpen] = useReducer(alertReducer, isOpenProp ?? false);

  return <AlertContextProvider value={{ isOpen, dispatchOpen }}>{children}</AlertContextProvider>;
};
const AlertTrigger = ({ asChild, children }: { asChild?: boolean; children: React.ReactNode }) => {
  const { dispatchOpen } = useSelectContext();
  if (asChild) return <Slot onClick={() => dispatchOpen('open')}>{children}</Slot>;

  return (
    <Button variant="dark" size="medium" type="button" onClick={() => dispatchOpen('open')}>
      {children}
    </Button>
  );
};

type AlertContentProps = ComponentPropsWithoutRef<'div'> & RecipeVariants<typeof styles.popup>;

const AlertContent = ({ size, children, className, ...props }: AlertContentProps) => {
  const { isOpen } = useSelectContext();
  if (!isOpen) return null;

  return createPortal(
    <div className={clsx(styles.popupContainer, className)} {...props}>
      <div className={styles.popup({ size })}>{children}</div>
    </div>,
    document.body,
  );
};

const AlertTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

const AlertMessage = ({ children }: { children: React.ReactNode }) => {
  return <pre className={styles.message}>{children}</pre>;
};

const AlertCloseButton = ({ asChild, onClick, ...props }: ComponentProps<typeof Button>) => {
  const { dispatchOpen } = useSelectContext();
  const Comp = asChild ? Slot : Button;
  return (
    <Comp
      onClick={async (e) => {
        await onClick?.(e);
        dispatchOpen('close');
      }}
      {...props}
    />
  );
};

export { Alert, AlertCloseButton, AlertContent, AlertMessage, type AlertProps, AlertTitle, AlertTrigger };
