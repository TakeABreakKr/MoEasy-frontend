import React, { useReducer, useState } from 'react';

import useMouseSnapSlide from '../../utils/lib/useMouseSnapSlide';
import { AlertProps } from '../alert/alert';
import { Button } from '../button';
import { checkGroupReducer } from '../checkbox';
import { CheckBoxActionType } from '../checkbox/reducer';
import { Input } from '../input';
import { Tag } from '../tag';

import { ListItem } from './item/item';

import * as styles from './list.css';

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

type ListContentProps = Pick<ListProps, 'list' | 'selected'> & {
  dispatch: React.Dispatch<CheckBoxActionType<ListItemType>>;
};

function ListContent({ list = [], selected = [], dispatch }: ListContentProps) {
  return (
    <div className={styles.userList}>
      {list.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          checked={selected.findIndex((_item) => _item.id == item.id) !== -1}
          toggleItemSelection={() => dispatch({ type: 'ADD', payload: item, predicate: ({ id }) => item.id === id })}
        />
      ))}
    </div>
  );
}
type ListFooterProps = Pick<ListProps, 'close' | 'selected'>;

function ListFooter({ selected = [], close }: ListFooterProps) {
  return (
    <div className={styles.footer}>
      <Button variant="primary" size="large" rounded="medium" onClick={() => close?.(selected)}>
        확인
      </Button>
    </div>
  );
}

export const List = ({ list = [], selected: prevSelected = [], close, dispatchKeyword }: ListProps) => {
  const [selected, dispatch] = useReducer(checkGroupReducer<ListItemType>, prevSelected);
  const [keyword, setKeyword] = useState('');

  return (
    <>
      <div className={styles.inputWrapper}>
        <Input
          type="text"
          placeholder="닉네임, 유저코드 검색"
          style={{ width: '100%' }}
          value={keyword}
          onValueChange={setKeyword}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              dispatchKeyword?.(keyword);
            }
          }}
        />
        <Button
          variant="primary"
          size="medium"
          rounded="medium"
          onClick={() => {
            dispatchKeyword?.(keyword);
          }}
        >
          검색
        </Button>
      </div>
      <div className={styles.delBtnWrapper} {...useMouseSnapSlide().callbacks}>
        {selected.map((item) => (
          <Tag
            key={item.id}
            isDelete
            onClick={() => dispatch({ type: 'REMOVE', payload: item, predicate: ({ id }) => item.id === id })}
          >
            {item.name}
          </Tag>
        ))}
      </div>
      <ListContent list={list} selected={selected} dispatch={dispatch} />
      <ListFooter selected={selected} close={close} />
    </>
  );
};
