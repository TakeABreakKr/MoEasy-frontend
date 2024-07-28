import type { Meta, StoryObj } from '@storybook/react';

import { List } from './list';

const meta = {
  title: 'Example/List',
  component: List,
  parameters: {},
  args: {
    users: Array.from({ length: 20 }, (_, idx) => ({
      id: idx,
      name: 'Alex',
      avatar: 'https://via.placeholder.com/120',
    })),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {},
};
