'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useInfiniteQuery } from '@tanstack/react-query';

import { MeetingType } from '@/entities/meeting/api';
import { initializeMeetingList } from '@/entities/meeting/api/mock';
import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { delay } from '@moeasy/storybook/utils/lib/delay';
import { useIntersectionObserver } from '@moeasy/storybook/utils/use-intersection-observer';

import { isIdValid } from '../utils';

import { PopupCard } from './card/popup/v2';
import { MeetingCard } from './card/v2';

import * as styles from './list.css';

export default function MeetingList() {
  const searchParams = useSearchParams();
  const {
    isPending,
    data: meetingList,
    fetchNextPage,
  } = useInfiniteQuery<MeetingType[]>({
    queryKey: ['meetingList'],
    queryFn: async ({ pageParam }) => {
      await delay(100);
      return initializeMeetingList(pageParam as number);
    },
    initialData: () => ({ pages: [], pageParams: [] }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.length,
  });
  const [ref, inView] = useIntersectionObserver();
  const meetingId = searchParams.get('meetingId');
  const memberId = searchParams.get('memberId');
  const isMeetingIdValid = isIdValid(meetingId);
  const isMemberIdValid = isIdValid(memberId);
  const authority = 'MANAGER';

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <>
      <section className={sprinkles({ justifyContent: 'center' })}>
        <div className={styles.teamgrid}>
          {meetingList?.pages?.map((page) =>
            page.map((meeting) => <MeetingCard key={meeting.name} meeting={meeting} />),
          )}
          {!isPending && <span ref={ref} />}
        </div>
      </section>
      {(isMeetingIdValid || isMemberIdValid) && (
        <PopupCard meetingId={meetingId} memberId={memberId} authority={authority} />
      )}
    </>
  );
}
