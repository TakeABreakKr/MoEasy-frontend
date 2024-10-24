import { XIcon } from '../icon';

import { Alert, AlertCloseButton, AlertContent, AlertMessage, AlertTitle } from './alert';

import { closeWrapper } from './alert.css';

type Props = {
  title?: string | JSX.Element;
  message?: string | JSX.Element;
  open?(): void;
  close?(): void;
  closeVisible?: boolean;
};

export function CommonAlert({ title, message, open, close, closeVisible }: Props) {
  return (
    <Alert isOpen>
      <AlertContent>
        {closeVisible && (
          <div className={closeWrapper}>
            <AlertCloseButton variant="dark" rounded="full" size="icon">
              <XIcon width={15} height={15} />
            </AlertCloseButton>
          </div>
        )}
        {title && <AlertTitle>{title}</AlertTitle>}
        {message && <AlertMessage>{message}</AlertMessage>}

        <AlertCloseButton onClick={close}>확인</AlertCloseButton>
      </AlertContent>
    </Alert>
  );
}
