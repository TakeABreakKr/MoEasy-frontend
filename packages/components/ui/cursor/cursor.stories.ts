import type { Meta, StoryObj } from '@storybook/react';

import { Cursor } from './cursor';

const meta = {
  title: 'Common/Cursor',
  component: Cursor,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    length: 30,
  },
} satisfies Meta<typeof Cursor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
  args: {},
};
