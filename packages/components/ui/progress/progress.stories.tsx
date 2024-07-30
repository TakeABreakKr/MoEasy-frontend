import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Progress from './progress';

const meta = {
  title: 'Example/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onProgress: fn() },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    max: 10,
    value: 3,
  },
};
