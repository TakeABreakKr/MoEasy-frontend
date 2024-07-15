import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import CardAlarm from './item';

const meta = {
  title: 'Example/Alarm/Item',
  component: CardAlarm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof CardAlarm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    idx: 1,
    title: '제목',
    description: `내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용 냉무`,
  },
};
