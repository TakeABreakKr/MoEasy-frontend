'use client';

import { useEffect, useState } from 'react';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { useIntersectionObserver } from '@moeasy/storybook/utils/use-intersection-observer';

import { Card } from '../../card/ui';

import * as teamStyle from './team-list.css';

type TeamType = {
  index: number;
  name: string;
};
const initialTeams = Array.from({ length: 20 }, (_, index) => ({ index, name: `Team ${index + 1}` }));

export default function TeamList() {
  const [teamlist, setTeamlist] = useState<TeamType[]>(initialTeams);
  const [ref, inView] = useIntersectionObserver();
  useEffect(() => {
    if (inView) setTeamlist((prevState) => [...prevState, ...initialTeams]);
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
      </div>
      <span ref={ref}></span>
    </section>
  );
}
