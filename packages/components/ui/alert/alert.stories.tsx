import type { Meta, StoryObj } from '@storybook/react';

import { SimpleAlert } from '.';

const customStyle = {
  width: 180,
  height: 40,
  backgroundColor: 'lightblue',
  borderRadius: 4,
} as const;

const meta = {
  title: 'Common/Alert',
  component: SimpleAlert,
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
    defaultOpen: false,
    title: '모임 이름을 수정해주세요',
    message: '모임 이름은 최대 30글자 까지 입력 가능합니다.',
    children: <button style={customStyle}>모달을 컨트롤 하는 버튼</button>,
  },
} satisfies Meta<typeof SimpleAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {};
export const StandaloneModal: Story = {
  args: {
    children: null,
    defaultOpen: true,
  },
};
export const ExcludeButton: Story = {
  args: {
    confirmButton: null,
  },
};

export const CustomButton: Story = {
  args: {
    confirmButton: <button style={customStyle}>커스텀 확인</button>,
  },
};

export const Movable: Story = {
  args: {
    contentDraggable: true,
  },
};
