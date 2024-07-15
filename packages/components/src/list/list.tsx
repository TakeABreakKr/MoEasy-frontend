import React, { useState } from 'react';

import { Alert, AlertProps } from '../alert/alert';
import { Checkbox } from '../checkbox';
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

export const List = ({ users = [], isOpen, open, close }: ListProps) => {
  const [selectedUsers, setSelectedUsers] = useState<UserProps[]>([]);
  const selectedIds = selectedUsers.map((user) => user.id);
  const isAllSelected = selectedUsers.length === users.length;

  const toggleUserSelection = (id: number) => {
    setSelectedUsers((prev) => {
      const currentUser = prev.find((user) => user.id === id);
      if (currentUser) {
        return prev.filter((user) => user.id !== id);
      } else {
        const userInfo = users.find((user) => user.id === id);
        if (userInfo) {
          return [...prev, userInfo];
        }
        return prev;
      }
    });
  };
  const toggleAllUsers = () => {
    if (isAllSelected) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users);
    }
  };

  return (
    <Alert isOpen={isOpen} open={open}>
      <div className={styles.popupContainer}>
        <div className={styles.header}>
          <input type="text" placeholder="추가하려는 친구 이름을 입력하세요" className={styles.searchInput} />
          <button className={styles.searchButton}>검색</button>
        </div>
        <div className={styles.userItem} onClick={toggleAllUsers}>
          <span className={styles.userName}>사용자</span>
          <span className={styles.selectAll}>
            전체 체크 해제
            <Checkbox checked={isAllSelected} />
          </span>
        </div>
        <Separator color="#e0e0e0" direction="horizontal" />
        <div className={styles.userList}>
          {users.map((user) => (
            <ListItem
              key={user.id}
              user={user}
              checked={selectedIds.includes(user.id)}
              toggleUserSelection={toggleUserSelection}
            />
          ))}
        </div>
        <button className={styles.addButton} onClick={() => close && close(selectedUsers)}>
          추가하기
        </button>
      </div>
    </Alert>
  );
};
