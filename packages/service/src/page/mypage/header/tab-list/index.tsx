'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { Text } from '@moeasy/storybook/ui/text';

import * as styles from '../header.css';
import Link from 'next/link';

const tabMenus = [
  { key: 'meeting', value: '내모임' },
  { key: 'activity', value: '내활동' },
  // { key: 'friend', value: '내친구' },
  { key: 'interests', value: '관심' },
];

export function MyPageTabList() {
  const pathname = usePathname();
  const tab = pathname.split('/').pop() || 'meeting';

  return (
    <ul className={styles.tabList}>
      {tabMenus.map(({ key, value }) => (
        <li key={key}>
          <Text asChild headline="small">
            <Link href={`/mypage/${key}`} className={clsx(styles.tabItem, key === tab && styles.tabItemActive)}>
              {value}
            </Link>
          </Text>
        </li>
      ))}
      <li key="profile">
        <Text asChild headline="small">
          <Link href={`/mypage/profile`} className={clsx(styles.tabItem, 'profile' === tab && styles.tabItemActive)}>
            프로필
          </Link>
        </Text>
      </li>
    </ul>
  );
}
