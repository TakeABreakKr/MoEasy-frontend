import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../button';

import { Alert, AlertCloseButton, AlertContent, AlertMessage, AlertTitle } from './confirm';

import styles from './confirm.module.css';

type Props = {
  title?: string | JSX.Element;
  message?: string | JSX.Element;
  open?(): void;
  close?(): void;
};

const SampleConfirm = ({ title, message, open, close }: Props) => {
  return (
    <Alert isOpen>
      <AlertContent>
        <AlertTitle>{title}</AlertTitle>
        <AlertMessage>{message}</AlertMessage>

        <div className={styles['btn-wrapper']}>
          <Button primary onClick={open}>
            확인
          </Button>
          <AlertCloseButton onClick={close}>닫기</AlertCloseButton>
        </div>
      </AlertContent>
    </Alert>
  );
};

const meta = {
  title: 'Example/Confirm',
  component: SampleConfirm,
  tags: ['autodocs'],
  parameters: {
    layout: 'layout',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  args: {},
} satisfies Meta<typeof SampleConfirm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    title: 'hi',
    message: 'where the north wind meets the sea',
  },
};

export const None: Story = {
  args: {},
};
