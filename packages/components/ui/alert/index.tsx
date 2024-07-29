import { Alert, AlertCloseButton, AlertContent, AlertMessage, AlertTitle } from './alert';

type Props = {
  title?: string | JSX.Element;
  message?: string | JSX.Element;
  open?(): void;
  close?(): void;
};

export const SampleAlert = ({ title, message, open, close }: Props) => {
  return (
    <Alert isOpen>
      <AlertContent>
        <AlertTitle>{title}</AlertTitle>
        <AlertMessage>{message}</AlertMessage>

        <AlertCloseButton onClick={close}>확인</AlertCloseButton>
      </AlertContent>
    </Alert>
  );
};
