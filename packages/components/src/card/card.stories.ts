import type { Meta, StoryObj } from '@storybook/react';

import Card from './card';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    idx: 1,
    title: '제목',
    description: `내용`,
  },
};
