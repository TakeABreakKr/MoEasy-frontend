'use client';

import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { pushSearchParams } from '@/shared/utils/search-param';
import MainCommonCard from '@/widget/main/card/common';

import { ChevronDown } from '@moeasy/storybook/ui/icon';
import { Text } from '@moeasy/storybook/ui/text';

import * as styles from './mypage.css';

const tabMenus = [
  { key: 'meeting', value: '내모임' },
  { key: 'activity', value: '내활동' },
  { key: 'friend', value: '내친구' },
  { key: 'interests', value: '관심' },
];

const filterMenus = [
  { key: 'category', value: '전체 카테고리' },
  { key: 'latest', value: '최신 가입순' },
  { key: 'role', value: '모임 역할' },
];

export function MyPage() {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'meeting';
  const filter = searchParams.get('filter');
  return (
    <>
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
        <div
          className={sprinkles({
            display: 'flex',
            gap: 'small',
          })}
        >
          <button
            className={clsx(styles.filterButton, filter === 'category' && styles.filterButtonActive)}
            onClick={() => pushSearchParams({ filter: 'category' })}
          >
            전체 카테고리
            <ChevronDown height={6} aria-hidden />
          </button>
          <button
            className={clsx(styles.filterButton, filter === 'latest' && styles.filterButtonActive)}
            onClick={() => pushSearchParams({ filter: 'latest' })}
          >
            최신 가입순
            <ChevronDown height={6} aria-hidden />
          </button>
          <button
            className={clsx(styles.filterButton, filter === 'role' && styles.filterButtonActive)}
            onClick={() => pushSearchParams({ filter: 'role' })}
          >
            모임 역할
            <ChevronDown height={6} aria-hidden />
          </button>
        </div>
      </section>
      <section className={styles.meetingList}>
        {Array.from({ length: 10 }, (_, index) => (
          <MainCommonCard key={index} idx={index + 1} title="의미역 1" description="의미역 1 description" count={10} />
        ))}
      </section>
    </>
  );
}
