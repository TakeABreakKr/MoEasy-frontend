'use client';

import { useEffect, useState } from 'react';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { delay } from '@moeasy/storybook/utils/lib/delay';
import { useIntersectionObserver } from '@moeasy/storybook/utils/use-intersection-observer';

import { MeetingType } from '../types';

import { MeetingCard } from './card';

import * as teamStyle from './team-list.css';

const initializeMeetingList = (lastIndex = 0): MeetingType[] =>
  Array.from({ length: 20 }, (_, index) => ({
    meetingId: `G-${lastIndex + index}`,
    name: `Team ${lastIndex + index + 1}`,
    explanation: `explanation ${index}`,
    authority: 'MANAGER',
  }));

export default function MeetingList() {
  const [teamlist, setTeamlist] = useState<MeetingType[]>(initializeMeetingList);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useIntersectionObserver();

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
    <section className={sprinkles({ justifyContent: 'center' })}>
      <div className={teamStyle.teamgrid}>
        {teamlist.map((team) => (
          <MeetingCard key={team.name} team={team} members={[{ name: 'JAMES' }]} />
        ))}
        {!loading && <span ref={ref} />}
      </div>
    </section>
  );
}
