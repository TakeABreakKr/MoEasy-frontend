import type { Meta, StoryObj } from '@storybook/react';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu';
import { useState } from 'react';

const DropDownExample = ({ list }: { list?: string[] }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>ㅇㅇ</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {list?.map((item) => <DropdownMenuItem key={item}>{item}</DropdownMenuItem>)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const meta = {
  title: 'Common/DropDownExample',
  component: DropDownExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    list: ['apple', 'banana', 'fruit'],
  },
} satisfies Meta<typeof DropDownExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {},
};
