import React, { ComponentProps, HTMLAttributes, isValidElement, useState } from 'react';
import clsx from 'clsx';

import { Button } from '../button';
import { contextCreator } from '../utils/useSafeContext';

import styles from './alert.module.css';

type AlertProps = {
  size?: 'small' | 'medium' | 'large';
  isOpen?: boolean;
  open?(): void;
  close?(): void;
  children: React.ReactNode;
};

type AlertCtxType = {
  size?: 'small' | 'medium' | 'large';
  isOpen?: boolean;
  open(): void;
  close(): void;
};

const [AlertContextProvider, useSelectContext] = contextCreator<AlertCtxType>();

const Alert = ({ children, isOpen: isOpenProp, ...props }: AlertProps) => {
  const [isOpen, setIsOpen] = useState(isOpenProp);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return <AlertContextProvider value={{ isOpen, open, close }}>{children}</AlertContextProvider>;
};
const AlertTrigger = ({ children }: { children: React.ReactNode }) => {
  const { open } = useSelectContext();
  if (!isValidElement(children)) return null;
  return React.cloneElement(children as JSX.Element, {
    onClick: (e: React.MouseEvent<HTMLElement>) => {
      open();
      if (children.props.onClick) {
        children.props.onClick(e);
      }
    },
  });
};

const AlertContent = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { isOpen } = useSelectContext();
  if (!isOpen) return null;

  return (
    <div className={clsx(styles['popup-container'], className)} {...props}>
      <div className={styles.popupContent}>{children}</div>
    </div>
  );
};

const AlertTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

const AlertMessage = ({ children }: { children: React.ReactNode }) => {
  return <p className={styles.message}>{children}</p>;
};

const AlertCloseButton = ({ onClick, ...props }: ComponentProps<typeof Button>) => {
  const { close } = useSelectContext();
  return (
    <Button
      onClick={(e) => {
        onClick && onClick(e);
        close();
      }}
      {...props}
    />
  );
};

export { Alert, AlertCloseButton, AlertContent, AlertMessage, AlertTitle, AlertTrigger };
