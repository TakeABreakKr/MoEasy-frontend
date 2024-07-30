import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './button';

const meta = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
  },
  args: { onClick: fn(), size: 'medium', rounded: 'medium', children: 'Button' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    variant: 'dark',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};
export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
