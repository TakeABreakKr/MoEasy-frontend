'use client';

import { forwardRef } from 'react';

import { MainScheduleCard } from '@/widget/card/schedule';

import { MainActivityDto } from '../../type';
import { withMainCartHeader } from '..';

import * as styles from '../section.css';
import { activityCard } from './activity.css';

export const MainCardActivitySectionContentBase = forwardRef<
  HTMLDivElement,
  {
    loading?: boolean;
    data?: MainActivityDto[];
  }
>(function MainCardActivitySectionContentBase({ loading, data }, ref) {
  if (loading) return <div>loading...</div>;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardWrapper.activity} ref={ref}>
        {data?.map((activity, index) => <MainScheduleCard key={index} className={activityCard} schedule={activity} />)}
      </div>
      <div className={styles.overlayNoPointer} />
    </div>
  );
});

export const MainCardActivitySection = withMainCartHeader(MainCardActivitySectionContentBase);
