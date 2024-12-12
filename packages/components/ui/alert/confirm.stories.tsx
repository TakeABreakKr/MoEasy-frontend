import type { Meta, StoryObj } from '@storybook/react';

import { SimpleConfirm } from '.';

const customStyle = {
  width: 180,
  height: 40,
  backgroundColor: 'lightblue',
  borderRadius: 4,
} as const;
const meta = {
  title: 'Common/Alert/Confirm',
  component: SimpleConfirm,
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
    children: <button style={customStyle}>모달을 컨트롤 하는 버튼</button>,
  },
} satisfies Meta<typeof SimpleConfirm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {};
export const StandaloneModal: Story = {
  args: {
    children: null,
    defaultOpen: true,
  },
};
export const CustomButton: Story = {
  args: {
    cancelButton: <button style={customStyle}>커스텀 확인</button>,
  },
};
