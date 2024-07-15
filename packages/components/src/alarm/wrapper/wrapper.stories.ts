import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import CardAlarm from './wrapper';

const meta = {
  title: 'Example/Alarm/Wrapper',
  component: CardAlarm,
  tags: ['autodocs'],
  parameters: {},
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof CardAlarm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    itemList: [
      {
        idx: 1,
        title: '제목',
        description: `내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용 냉무`,
      },
      {
        idx: 2,
        title: '젤다의 링크',
        description: `내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용 냉무`,
      },
    ],
  },
};
