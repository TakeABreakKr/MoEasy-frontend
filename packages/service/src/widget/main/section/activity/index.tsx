'use client';

import { forwardRef } from 'react';

import MainCommonCard from '../../card/common';
import { MainActivityDto } from '../../type';
import { withMainCartHeader } from '..';

import * as styles from '../section.css';

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
      <div className={styles.cardWrapper} ref={ref}>
        {data?.map((meeting, idx) => (
          <MainCommonCard key={idx} idx={idx + 1} title={meeting.name} description={meeting.description} />
        ))}
      </div>
      <div className={styles.overlayNoPointer} />
    </div>
  );
});

export const MainCardActivitySection = withMainCartHeader(MainCardActivitySectionContentBase);
