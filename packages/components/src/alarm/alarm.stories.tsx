import type { Meta, StoryObj } from '@storybook/react';

import AlarmHover from './alarm';

const meta = {
  title: 'Example/Alarm',
  component: AlarmHover,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  args: {},
} satisfies Meta<typeof AlarmHover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    itemList: [{ idx: 1, title: 'sample', description: 'description' }],
  },
};

export const None: Story = {
  args: {},
};
