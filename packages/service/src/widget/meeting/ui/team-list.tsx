'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';

import { useIntersectionObserver } from '@/shared/utils/useIntersectionObserver';

import teamStyle from './team-list.module.css';

type TeamType = {
  name: string;
};
const initialTeams = Array.from({ length: 20 }, (_, idx) => ({ name: `Team ${idx + 1}` }));

export default function TeamList() {
  const [teamlist, setTeamlist] = useState<TeamType[]>(initialTeams);
  const callback: IntersectionObserverCallback = useCallback((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setTeamlist((prevState) => [...prevState, ...initialTeams]);
      }
    }
  }, []);

  const ref = useIntersectionObserver(callback);

  return (
    <section>
      <div className={teamStyle.grid}>
        {teamlist.map((team) => (
          <div key={team.name} className={teamStyle['grid-item']}>
            <Image width={300} height={300} src="https://via.placeholder.com/300" alt="People sitting at a table" />
            <span>{team.name}</span>
          </div>
        ))}
      </div>
      <span ref={ref}></span>
    </section>
  );
}
