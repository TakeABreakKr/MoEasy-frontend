'use client';

import { useEffect, useState } from 'react';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { delay } from '@moeasy/storybook/utils/lib/delay';
import { useIntersectionObserver } from '@moeasy/storybook/utils/use-intersection-observer';

import { Card } from '../../card/ui';

import * as teamStyle from './team-list.css';

type TeamType = {
  index: number;
  name: string;
};
const initialTeams = (lastIndex = 0) =>
  Array.from({ length: 20 }, (_, index) => ({ index: lastIndex + index, name: `Team ${lastIndex + index + 1}` }));

export default function TeamList() {
  const [teamlist, setTeamlist] = useState<TeamType[]>(initialTeams);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useIntersectionObserver();

  useEffect(() => {
    if (inView) {
      setLoading(true);

      setTeamlist((prevState) => {
        const lastIndex = prevState.reduce((acc, meeting) => (meeting.index > acc ? meeting.index : acc), 0);
        return [...prevState, ...initialTeams(lastIndex)];
      });

      delay(100).then(() => setLoading(false));
    }
  }, [inView]);

  return (
    <section className={sprinkles({ justifyContent: 'center' })}>
      <div className={teamStyle.teamgrid}>
        {teamlist.map((team) => (
          <Card
            key={team.name}
            name={team.name}
            idx={team.index}
            authority="MEMBER"
            meetingId={String(team.index)}
            explanation="exp"
          />
        ))}
        {!loading && <span ref={ref} />}
      </div>
    </section>
  );
}
