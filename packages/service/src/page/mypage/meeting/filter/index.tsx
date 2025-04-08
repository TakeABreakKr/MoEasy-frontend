'use client';

import { useSearchParams } from 'next/navigation';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { MyPageFilterCategory } from './category';
import { MyPageFilterLatest } from './latest';
import { MyPageFilterLole } from './role';

import * as styles from '../../mypage.css';

export function MyPageMeetingFilter() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter');

  return (
    <section className={styles.tabSection}>
      <div className={sprinkles({ display: 'flex', gap: 'small' })}>
        <MyPageFilterCategory active={filter === 'category'} />
        <MyPageFilterLatest active={filter === 'latest'} />
        <MyPageFilterLole active={filter === 'role'} />
      </div>
    </section>
  );
}
