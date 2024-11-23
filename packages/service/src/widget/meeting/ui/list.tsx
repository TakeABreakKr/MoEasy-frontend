'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

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
  const [meetingList, setTeamlist] = useState<MeetingType[]>(initializeMeetingList);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useIntersectionObserver();
  const searchParams = useSearchParams();
  const meetingId = searchParams.get('meetingId');
  const memberId = searchParams.get('memberId');
  const isMeetingIdValid = isIdValid(meetingId);
  const isMemberIdValid = isIdValid(memberId);
  const authority = 'MANAGER';

  useEffect(() => {
    if (inView) {
      setLoading(true);

      setTeamlist((prevState) => {
        const lastIndex = prevState.length;
        return [...prevState, ...initializeMeetingList(lastIndex)];
      });

      delay(100).then(() => setLoading(false));
    }
  }, [inView]);

  return (
    <>
      <section className={sprinkles({ justifyContent: 'center' })}>
        <div className={styles.teamgrid}>
          {meetingList.map((meeting) => (
            <MeetingCard key={meeting.name} meeting={meeting} />
          ))}
          {!loading && <span ref={ref} />}
        </div>
      </section>
      {(isMeetingIdValid || isMemberIdValid) && (
        <PopupCard meetingId={meetingId} memberId={memberId} authority={authority} />
      )}
    </>
  );
}
