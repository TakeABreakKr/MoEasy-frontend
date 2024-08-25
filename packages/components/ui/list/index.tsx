import { PropsWithChildren, useReducer } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

import { contextCreator } from '../../utils/useSafeContext';
import { AlertProps } from '../alert/alert';
import { Button } from '../button';
import { CheckBoxActionType, checkGroupReducer } from '../checkbox';

import { ListDeleteControl } from './delete-control';
import { ListKeywordInput } from './input';
import { ListItem } from './item';

import { scrollStyle } from '../scroll/scroll.css';
import { footer, itemList } from './list.css';

export type ListItemType = {
  id: string;
  name: string;
  avatar?: string;
};

export type ListProps = {
  list?: ListItemType[];
  selected?: ListItemType[];
  close?: (list: ListItemType[]) => void;
  dispatchKeyword?: (keyword: string) => void;
} & Omit<AlertProps, 'close'>;

export type SelectedListDispatch = React.Dispatch<CheckBoxActionType<ListItemType>>;

const [ListProvider, useListContext] = contextCreator<
  Pick<ListProps, 'selected' | 'list'> & { dispatch: SelectedListDispatch }
>();

export const List = ({ list = [], selected: prevSelected = [], dispatchKeyword, children }: ListProps) => {
  const [selected, dispatch] = useReducer(checkGroupReducer<ListItemType>, prevSelected);
  return (
    <ListProvider value={{ selected, list, dispatch }}>
      <ListKeywordInput dispatchKeyword={dispatchKeyword} />
      <ListDeleteControl selected={selected} dispatch={dispatch} />
      {children}
    </ListProvider>
  );
};

type ListContentProps = PropsWithChildren<{
  className?: string;
}>;

export function ListContent({ children, className }: ListContentProps) {
  const ctx = useListContext();

  return (
    <div className={clsx(itemList, scrollStyle, className)} data-testid="list-content">
      {ctx.list?.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          checked={ctx.selected?.findIndex((_item) => _item.id == item.id) !== -1}
          toggleItemSelection={() =>
            ctx.dispatch({ type: 'ADD', payload: item, predicate: ({ id }) => item.id === id })
          }
        />
      ))}
      {children}
    </div>
  );
}

type ListFooterProps = Pick<ListProps, 'close' | 'selected'> & { asChild?: boolean; children?: React.ReactNode };

export function ListFooter({ close, asChild, children }: ListFooterProps) {
  const { selected = [] } = useListContext();
  const Comp = asChild ? Slot : Button;
  return (
    <div className={footer}>
      <Comp variant="primary" size="large" rounded="medium" onClick={() => close?.(selected)}>
        {children ?? '확인'}
      </Comp>
    </div>
  );
}
