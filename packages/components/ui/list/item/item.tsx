import React, { useState } from 'react';
import clsx from 'clsx';

import Image from 'next/image';

import { delay } from '../../../utils/lib/delay';
import { Checkbox } from '../../checkbox';
import { ListItemType } from '../list';

import * as styles from '../list.css';

type ListItemProps = {
  item: ListItemType;
  checked?: boolean;
  toggleItemSelection: (id: string) => void;
};

export const ListItem = ({ item, checked, toggleItemSelection }: ListItemProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const onSelected = async (id: string) => {
    setFadeOut(true);
    await delay();
    toggleItemSelection(id);
    setFadeOut(false);
  };

  if (checked) return null;

  return (
    <div
      role="button"
      key={item.id}
      className={clsx(styles.userItem, fadeOut && styles.userItemFadeOut)}
      onClick={() => onSelected(item.id)}
    >
      <div className={styles.userInfo}>
        <span className={styles.userAvatar}>
          <Image
            src={item.avatar || `https://via.placeholder.com/30/${item.id}`}
            width={30}
            height={30}
            alt={item.name || 'avatar'}
          />
        </span>
        <span className={styles.userName}>{item.name}</span>
      </div>
      <Checkbox
        checked={fadeOut || checked}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSelected(item.id);
          }
        }}
      />
    </div>
  );
};
