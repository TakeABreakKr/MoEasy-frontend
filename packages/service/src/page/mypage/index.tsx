'use client';

import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

import { pushSearchParams } from '@/shared/utils/search-param';
import MainCommonCard from '@/widget/main/card/common';
import { MyPageFilter } from '@/widget/mypage/filter';

import { Text } from '@moeasy/storybook/ui/text';

import * as styles from './mypage.css';

const tabMenus = [
  { key: 'meeting', value: '내모임' },
  { key: 'activity', value: '내활동' },
  { key: 'friend', value: '내친구' },
  { key: 'interests', value: '관심' },
];

export function MyPage() {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'meeting';
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
        <MyPageFilter />
      </section>
      <section className={styles.meetingList}>
        {Array.from({ length: 10 }, (_, index) => (
          <MainCommonCard key={index} idx={index + 1} title="의미역 1" description="의미역 1 description" count={10} />
        ))}
      </section>
    </>
  );
}
