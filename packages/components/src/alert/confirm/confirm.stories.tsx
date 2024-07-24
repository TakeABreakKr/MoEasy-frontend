import { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { XIcon } from '../../icon';
import { Alert, AlertCloseButton, AlertContent, AlertMessage, AlertTitle, AlertTrigger } from '../alert';

type Props = {
  title?: string | JSX.Element;
  message?: string | JSX.Element;
  className?: string;
};

const sampleCloseButtonStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
} as const satisfies CSSProperties;

const sampleButtonWrapperStyle = {
  display: 'flex',
  gap: '.9375rem',
} as const satisfies CSSProperties;

const flewGrowOne = {
  flexGrow: 1,
} as const satisfies CSSProperties;

const SampleAlert = ({ title, message, className }: Props) => {
  return (
    <Alert isOpen>
      <AlertTrigger>팝업 열기</AlertTrigger>
      <AlertContent className={className}>
        <div style={sampleCloseButtonStyle}>
          <AlertCloseButton variant="dark" rounded="full" size="small">
            <XIcon />
          </AlertCloseButton>
        </div>
        <AlertTitle>{title}</AlertTitle>
        <AlertMessage>{message}</AlertMessage>
        <div style={sampleButtonWrapperStyle}>
          <AlertCloseButton variant="dark" size="large" rounded="medium" style={flewGrowOne}>
            모임 관리
          </AlertCloseButton>
          <AlertCloseButton variant="light" size="large" rounded="medium" style={flewGrowOne}>
            닫기
          </AlertCloseButton>
        </div>
      </AlertContent>
    </Alert>
  );
};

const meta = {
  title: 'Common/Alert/Confirm',
  component: SampleAlert,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  args: {
    title: '모임 이름을 수정해주세요',
    message: `[모임장]권한으로 있는 모임에서 탈퇴할 경우\n선순위 가입 매니저가 자동으로 모임장이 됩니다.\n매니저가 없을 시 모임은 사라지게 됩니다.\n모임에서 탈퇴 하시겠습니까?`,
  },
} satisfies Meta<typeof SampleAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {};

export const None: Story = {
  args: {},
};
