import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DirectionButton } from './button';

const meta = {
  title: 'Common/Button/Direction',
  component: DirectionButton,
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
  args: { onClick: fn(), direction: 'left' },
} satisfies Meta<typeof DirectionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultState: Story = {
  args: {},
};

export const RightForm: Story = {
  args: {
    direction: 'right',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
