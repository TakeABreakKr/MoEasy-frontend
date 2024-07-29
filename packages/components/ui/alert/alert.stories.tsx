import { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { XIcon } from '../icon';

import { Alert, AlertCloseButton, AlertContent, AlertMessage, AlertTitle, AlertTrigger } from './alert';

type Props = {
  title?: string | JSX.Element;
  message?: string | JSX.Element;
  /** 메세지 아래 버튼 제거 */
  excludeButton?: boolean;
  className?: string;
};

const sampleStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
} as const satisfies CSSProperties;

const SampleAlert = ({ title, message, excludeButton, className }: Props) => {
  return (
    <Alert isOpen>
      <AlertTrigger>팝업 열기</AlertTrigger>
      <AlertContent className={className}>
        <div style={sampleStyle}>
          <AlertCloseButton variant="dark" rounded="full" size="small">
            <XIcon width={15} height={15} />
          </AlertCloseButton>
        </div>
        <AlertTitle>{title}</AlertTitle>
        <AlertMessage>{message}</AlertMessage>
        {!excludeButton && (
          <AlertCloseButton variant="dark" size="large" rounded="medium">
            확인
          </AlertCloseButton>
        )}
      </AlertContent>
    </Alert>
  );
};

const meta = {
  title: 'Common/Alert',
  component: SampleAlert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  args: {
    title: '모임 이름을 수정해주세요',
    message: '모임 이름은 최대 30글자 까지 입력 가능합니다.',
  },
} satisfies Meta<typeof SampleAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {};

export const ExcludeButton: Story = {
  args: {
    excludeButton: true,
  },
};
