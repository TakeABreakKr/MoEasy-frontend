import { useReducer } from 'react';

import { AlertProps } from '../alert/alert';
import { CheckBoxActionType, checkGroupReducer } from '../checkbox';

import { ListContent } from './content';
import { ListDeleteControl } from './delete-control';
import { ListFooter } from './footer';
import { ListKeywordInput } from './input';

export type ListItemType = {
  id: string;
  name?: string;
  avatar?: string;
};

export type ListProps = {
  list?: ListItemType[];
  selected?: ListItemType[];
  close?: (list: ListItemType[]) => void;
  dispatchKeyword?: (keyword: string) => void;
} & Omit<AlertProps, 'children' | 'close'>;

export type SelectedListDispatch = React.Dispatch<CheckBoxActionType<ListItemType>>;

export const List = ({ list = [], selected: prevSelected = [], close, dispatchKeyword }: ListProps) => {
  const [selected, dispatch] = useReducer(checkGroupReducer<ListItemType>, prevSelected);
  return (
    <>
      <ListKeywordInput dispatchKeyword={dispatchKeyword} />
      <ListDeleteControl selected={selected} dispatch={dispatch} />
      <ListContent list={list} selected={selected} dispatch={dispatch} />
      <ListFooter selected={selected} close={close} />
    </>
  );
};
