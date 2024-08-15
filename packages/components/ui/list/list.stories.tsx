import { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AlertTitle } from '../alert/alert';

import { List, ListItemType } from '.';

import { popupContainer } from './list.css';

function LISTSAMPLE({ list = [], dispatchKeyword, ...props }: ComponentPropsWithoutRef<typeof List>) {
  const [userList, setList] = useState<ListItemType[]>([]);
  useEffect(() => {
    setList(list);
  }, [list]);

  return (
    <div className={popupContainer}>
      <AlertTitle>모임원 선택</AlertTitle>
      <List
        {...props}
        list={userList}
        dispatchKeyword={(keyword) => {
          setList(list.filter((item) => item.name?.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())));
        }}
      />
    </div>
  );
}

const meta = {
  title: 'Example/List',
  component: LISTSAMPLE,
  parameters: {},
  args: {
    list: Array.from({ length: 20 }, (_, idx) => ({
      id: String(idx),
      name: 'Alex',
      avatar: 'https://via.placeholder.com/30',
    })),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {},
};
