import type { Meta, StoryObj } from '@storybook/react';

import { Alert, AlertCloseButton, AlertContent, AlertMessage, AlertTitle } from './alert';

type Props = {
  title?: string | JSX.Element;
  message?: string | JSX.Element;
  open?(): void;
  close?(): void;
};

const SampleAlert = ({ title, message, open, close }: Props) => {
  return (
    <Alert isOpen>
      <AlertContent>
        <AlertTitle>{title}</AlertTitle>
        <AlertMessage>{message}</AlertMessage>

        <AlertCloseButton>확인</AlertCloseButton>
      </AlertContent>
    </Alert>
  );
};

const meta = {
  title: 'Example/Alert',
  component: SampleAlert,
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
} satisfies Meta<typeof SampleAlert>;

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
