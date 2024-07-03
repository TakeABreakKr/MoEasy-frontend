import React from 'react';
import clsx from 'clsx';

import Image from 'next/image';

import { Checkbox } from '../../checkbox';
import { UserProps } from '../list';

import styles from '../list.module.css';

type ListItemProps = {
  user: UserProps;
  checked?: boolean;
  toggleUserSelection: (id: number) => void;
};

export const ListItem = ({ user, checked, toggleUserSelection }: ListItemProps) => {
  return (
    <div
      role="button"
      key={user.id}
      className={clsx(styles.userItem, checked && styles.checked)}
      onClick={() => toggleUserSelection(user.id)}
    >
      <div className={styles.userInfo}>
        <span className={styles.userAvatar}>
          <Image
            src={user.avatar || `https://via.placeholder.com/30/${user.id}`}
            width={30}
            height={30}
            alt={user.name || 'avatar'}
          />
        </span>
        <span className={styles.userName}>{user.name}</span>
      </div>
      <Checkbox
        checked={checked}
        onClick={() => toggleUserSelection(user.id)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            toggleUserSelection(user.id);
          }
        }}
      />
    </div>
  );
};
