import { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { useIntersectionObserver } from '../../utils/use-intersection-observer';
import { AlertTitle } from '../alert/alert';

import { List, ListContent, ListFooter, ListItemType } from '.';

import { popupContainer } from './list.css';

function LISTSAMPLE({ list = [], dispatchKeyword, ...props }: ComponentPropsWithoutRef<typeof List>) {
  const [userList, setList] = useState<ListItemType[]>(list);
  const [ref, inView] = useIntersectionObserver();

  useEffect(() => {
    if (inView) setList((prev) => [...prev, ...list]);
  }, [inView, list]);

  return (
    <div className={popupContainer}>
      <AlertTitle>모임원 선택</AlertTitle>
      <List
        {...props}
        list={userList}
        dispatchKeyword={(keyword) => {
          setList(list.filter((item) => item.name?.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())));
        }}
      >
        <ListContent>
          {userList.length !== 0 && <span ref={ref} style={{ width: 10, height: 10, display: 'block' }} />}
        </ListContent>
        <ListFooter close={console.log}></ListFooter>
      </List>
    </div>
  );
}

const meta = {
  title: 'Common/List',
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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const keywordButton = canvas.getByTestId(/dispatch-keyword/);

    await step('친구 이름을 찾을 수 없는 키워드 입력 시 빈 리스트 출력', async () => {
      const keywordInput = canvas.getByRole('textbox');
      await userEvent.type(keywordInput, 'b', { delay: 300 });

      const keywordButton = canvas.getByTestId(/dispatch-keyword/);
      await userEvent.click(keywordButton, { delay: 500 });
      const contentAfterKeywordFirstChange = canvas.getByTestId(/list-content/);
      expect(contentAfterKeywordFirstChange.children.length).toBe(0);
    });

    await step('친구 이름을 찾을 수 있는 키워드 입력 시 키워드가 포함된 리스트 출력', async () => {
      const keywordInput = canvas.getByRole('textbox');
      await userEvent.type(keywordInput, '{backspace}');
      await userEvent.type(keywordInput, 'a');
      await userEvent.click(keywordButton, { delay: 200 });
      const contentAfterKeywordSecondChange = canvas.getByTestId(/list-content/);
      expect(contentAfterKeywordSecondChange.children.length).toBe(21);
    });
  },
};
