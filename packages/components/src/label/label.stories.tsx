import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './label';

const meta = {
  title: 'Common/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    children: '안녕하세요',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: '최대 30글자 까지 입력 가능합니다.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: '부적절한 단어 및 욕설을 사용할 경우 경고 없이 삭제될 수 있습니다.',
  },
};
