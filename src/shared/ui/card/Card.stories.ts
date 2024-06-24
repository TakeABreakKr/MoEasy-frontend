import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Card from './card';

const meta = {
  title: 'Example/Card',
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
  },
  args: {
    onClick: fn(),
  },
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
