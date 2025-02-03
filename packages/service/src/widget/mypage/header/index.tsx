'use client';

import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

import { pushSearchParams } from '@/shared/utils/search-param';

import { Text } from '@moeasy/storybook/ui/text';

import { MyPageFilter } from './filter';

import * as styles from './header.css';

const tabMenus = [
  { key: 'meeting', value: '내모임' },
  { key: 'activity', value: '내활동' },
  { key: 'friend', value: '내친구' },
  { key: 'interests', value: '관심' },
];

export function MyPageHeader() {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'meeting';

  return (
    <section className={styles.tabSection}>
      <Text label="large" asChild semibold>
        <h1>마이페이지</h1>
      </Text>
      <ul className={styles.tabList}>
        {tabMenus.map(({ key, value }) => (
          <li key={key}>
            <Text asChild headline="small">
              <button
                className={clsx(styles.tabItem, key === tab && styles.tabItemActive)}
                onClick={() => pushSearchParams({ tab: key })}
              >
                {value}
              </button>
            </Text>
          </li>
        ))}
      </ul>
      <MyPageFilter />
    </section>
  );
}
