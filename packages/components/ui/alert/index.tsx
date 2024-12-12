import { isValidElement } from 'react';
import { RecipeVariants } from '@vanilla-extract/recipes';

import Link from 'next/link';

import { Button } from '../button';
import { Modal, ModalClose, ModalContent, ModalOverlay, ModalPortal, type ModalProps, ModalTrigger } from '../dialog';
import { XIcon } from '../icon';

import * as styles from '../dialog/dialog.css';

export type AlertProps = ModalProps & {
  title?: React.ReactNode;
  message?: React.ReactNode;
  close?: () => void;
  confirmButton?: React.ReactNode;
  cancelButton?: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
} & RecipeVariants<typeof styles.container>;

export function SimpleAlert({
  title,
  message,
  close,
  size = 'alert',
  padding = 'small',
  cancelButton,
  confirmButton = '확인',
  children,
  href,
  ...props
}: AlertProps) {
  return (
    <Modal {...props}>
      {isValidElement(children) && <ModalTrigger asChild>{children}</ModalTrigger>}
      <ModalPortal>
        <ModalOverlay className={styles.overlay}>
          <ModalContent className={styles.container({ size, padding })}>
            <div className={styles.header}>
              <Button asChild variant="dark" rounded="full" size="icon" type="button">
                <ModalClose onClick={close}>
                  <XIcon />
                </ModalClose>
              </Button>
            </div>
            {title || message ? (
              <pre className={styles.popupContent}>
                {title && <h2 className={styles.popupTitle}>{title}</h2>}
                {message && <div className={styles.popupDesc}>{message}</div>}
              </pre>
            ) : null}
            <div className={styles.footer}>
              {typeof cancelButton === 'string' && (
                <Button variant="secondary" rounded="medium" size="large" type="button" asChild>
                  <ModalClose onClick={close}>{cancelButton}</ModalClose>
                </Button>
              )}
              {isValidElement(cancelButton) && (
                <ModalClose onClick={close} asChild>
                  {cancelButton}
                </ModalClose>
              )}
              {typeof confirmButton === 'string' && (
                <Button size="large" rounded="medium" type="button" onClick={close} asChild>
                  {href ? <Link href={href}>{confirmButton}</Link> : <ModalClose>{confirmButton}</ModalClose>}
                </Button>
              )}
              {isValidElement(confirmButton) && (
                <ModalClose onClick={close} asChild>
                  {confirmButton}
                </ModalClose>
              )}
            </div>
          </ModalContent>
        </ModalOverlay>
      </ModalPortal>
    </Modal>
  );
}

export function SimpleConfirm({ cancelButton = '취소', ...props }: AlertProps) {
  return <SimpleAlert {...props} cancelButton={cancelButton} />;
}
