import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from './tag';

const meta = {
  title: 'Common/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['dark', 'light'],
      control: 'select',
    },
  },
  args: {
    children: '사이드프로젝트',
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    variant: 'dark',
  },
};
