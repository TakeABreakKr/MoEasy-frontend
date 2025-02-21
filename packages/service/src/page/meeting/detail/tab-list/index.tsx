'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { Text } from '@moeasy/storybook/ui/text';

import { MEETING_DETAIL_TAB_LIST } from '../const';

import { useHash } from './use-hash';

import * as styles from './tab-list.css';

export function MeetingTabList() {
  const hash = useHash();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentHash = mounted ? hash || 'home' : null;

  return (
    <ul className={styles.tabList}>
      {MEETING_DETAIL_TAB_LIST.map(({ key, value }) => (
        <li key={key}>
          <Text asChild headline="small">
            <a
              className={clsx(styles.tabItem, mounted && key === currentHash && styles.tabItemActive)}
              href={`#${key}`}
            >
              {value}
            </a>
          </Text>
        </li>
      ))}
    </ul>
  );
}
