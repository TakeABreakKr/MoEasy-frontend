import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Header } from './header';

const meta = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  args: {
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    itemList: [
      {
        idx: 1,
        title: 'some-name',
        description: 'Some description',
      },
      {
        idx: 2,
        title: 'some-name',
        description: 'Some description',
      },
      {
        idx: 3,
        title: 'some-name',
        description: 'Some description',
      },
      {
        idx: 4,
        title: 'some-name',
        description: 'Some description',
      },
    ],
  },
};
