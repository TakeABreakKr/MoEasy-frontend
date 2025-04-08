import { useMemo } from 'react';

import { initializeMeetingList } from '@/entities/meeting/api/mock';
import { components } from '@/shared/api/my-schema';
import { MainCommonCard } from '@/widget/card/common';

import * as styles from './list.css';

export function MyPageMeetingPage() {
  const meetingList = useMemo<components['schemas']['HomePopularMeetingDto'][]>(
    () =>
      initializeMeetingList().map((meeting) => ({
        id: meeting.meetingId,
        name: meeting.name,
        thumbnail: meeting.thumbnail,
        explanation: meeting.explanation,
        likedYn: false,
        memberCount: meeting.limit,
      })),
    [],
  );
  return (
    <section className={styles.meetingList}>
      {meetingList.map((meeting) => (
        <MainCommonCard key={meeting.id} meeting={meeting} />
      ))}
    </section>
  );
}
