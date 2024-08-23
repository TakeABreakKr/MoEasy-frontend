import type { Meta, StoryObj } from '@storybook/react';

import { Time } from './time';

const meta = {
  title: 'Common/Time',
  component: Time,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Time>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {},
};
export const MinTime: Story = {
  args: {
    min: {
      hour: 12,
      minute: 30,
    },
  },
};
export const MaxTime: Story = {
  args: {
    max: {
      hour: 18,
      minute: 30,
    },
  },
};
