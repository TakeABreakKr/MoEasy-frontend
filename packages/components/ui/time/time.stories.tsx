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
