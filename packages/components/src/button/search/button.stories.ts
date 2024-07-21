import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SearchButton } from './button';

const meta = {
  title: 'Common/Button/Search',
  component: SearchButton,
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
  args: { onClick: fn(), children: 'Button' },
} satisfies Meta<typeof SearchButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
