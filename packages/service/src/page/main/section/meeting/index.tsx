'use client';

import { forwardRef } from 'react';

import { commonCard } from '@/widget/card/card.css';
import { MainCommonCard } from '@/widget/card/common';

import { MainMeetingDto } from '../../type';
import { withMainCartHeader } from '..';

import * as styles from '../section.css';

export const MainCardMeetingSectionContentBase = forwardRef<
  HTMLDivElement,
  {
    loading?: boolean;
    data?: MainMeetingDto[];
  }
>(function MainCardMeetingSectionContentBase({ loading, data }, ref) {
  if (loading) return <div>loading...</div>;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardWrapper.meeting} ref={ref}>
        {data?.map((meeting, idx) => (
          <MainCommonCard
            key={idx}
            idx={idx + 1}
            className={commonCard}
            title={meeting.name}
            description={meeting.description}
          />
        ))}
      </div>
      <div className={styles.overlayNoPointer} />
    </div>
  );
});

export const MainCardMeetingSection = withMainCartHeader(MainCardMeetingSectionContentBase);
