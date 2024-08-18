import { useReducer } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { contextCreator } from '../../utils/useSafeContext';
import { AlertProps } from '../alert/alert';
import { Button } from '../button';
import { CheckBoxActionType, checkGroupReducer } from '../checkbox';

import { ListContent } from './content';
import { ListDeleteControl } from './delete-control';
import { ListKeywordInput } from './input';

import { footer } from './list.css';

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

const [ListProvider, useListContext] = contextCreator<Pick<ListProps, 'selected'>>();

export const List = ({ list = [], selected: prevSelected = [], dispatchKeyword, children }: ListProps) => {
  const [selected, dispatch] = useReducer(checkGroupReducer<ListItemType>, prevSelected);
  return (
    <ListProvider value={{ selected }}>
      <ListKeywordInput dispatchKeyword={dispatchKeyword} />
      <ListDeleteControl selected={selected} dispatch={dispatch} />
      <ListContent list={list} selected={selected} dispatch={dispatch} />
      {children}
    </ListProvider>
  );
};

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
