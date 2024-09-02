'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { useIntersectionObserver } from '@moeasy/storybook/utils/use-intersection-observer';

import * as teamStyle from './team-list.css';

type TeamType = {
  name: string;
};
const initialTeams = Array.from({ length: 20 }, (_, idx) => ({ name: `Team ${idx + 1}` }));

export default function TeamList() {
  const [teamlist, setTeamlist] = useState<TeamType[]>(initialTeams);
  const [ref, inView] = useIntersectionObserver();
  useEffect(() => {
    if (inView) setTeamlist((prevState) => [...prevState, ...initialTeams]);
  }, [inView]);

  return (
    <section>
      <div className={teamStyle.teamgrid}>
        {teamlist.map((team) => (
          <div key={team.name} className={teamStyle.teamgridItem}>
            <Image
              className={teamStyle.teamItemImage}
              width={300}
              height={300}
              src="https://via.placeholder.com/300"
              alt="People sitting at a table"
            />
            <span>{team.name}</span>
          </div>
        ))}
      </div>
      <span ref={ref}></span>
    </section>
  );
}
