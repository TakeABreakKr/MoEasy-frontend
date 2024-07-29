import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './checkbox';

const meta = {
  title: 'Common/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    rounded: true,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    defaultChecked: true,
  },
};

export const NotChecked: Story = {
  args: {
    defaultChecked: false,
  },
};
