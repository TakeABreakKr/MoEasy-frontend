import React, { useReducer } from 'react';

import { Alert, AlertProps } from '../alert/alert';
import { checkGroupReducer } from '../checkbox';
import { Separator } from '../separator';

import { ListItem } from './item/item';

import styles from './list.module.css';

export type UserProps = {
  id: number;
  name?: string;
  avatar?: string;
};

export type ListProps = {
  users?: UserProps[];
  close?: (users: UserProps[]) => void;
} & Omit<AlertProps, 'children' | 'close'>;

const usersToIds = (users: UserProps[]) => users.map(({ id }) => id);

export const List = ({ users = [], isOpen, open, close }: ListProps) => {
  const [selectedUsers, dispatch] = useReducer(checkGroupReducer<number>, users, usersToIds);

  return (
    <Alert isOpen={isOpen} open={open}>
      <div className={styles.popupContainer}>
        <div className={styles.header}>
          <input type="text" placeholder="추가하려는 친구 이름을 입력하세요" className={styles.searchInput} />
          <button className={styles.searchButton}>검색</button>
        </div>
        <Separator color="#e0e0e0" direction="horizontal" />
        <div className={styles.userList}>
          {users.map((user) => (
            <ListItem
              key={user.id}
              user={user}
              checked={selectedUsers.includes(user.id)}
              toggleUserSelection={(id) => dispatch({ type: 'TOGGLE', payload: id })}
            />
          ))}
        </div>
        <button className={styles.addButton} onClick={() => close && close([])}>
          추가하기
        </button>
      </div>
    </Alert>
  );
};
