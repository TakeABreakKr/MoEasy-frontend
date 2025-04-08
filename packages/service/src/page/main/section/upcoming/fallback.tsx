'use client';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { MainActivityCardFallback } from '@/widget/card/activity/fallback';

import { DirectionButton } from '@moeasy/storybook/ui/button';

import { sectionHeaderFallback } from '../../fallback.css';
import * as styles from '../section.css';
import * as upcomingStyles from './upcoming.css';

export function MainUpcommingScheduleFallback() {
  return (
    <section className={styles.section}>
      <div className={sectionHeaderFallback} />
      <div className={upcomingStyles.dateContainer}>
        {Array.from({ length: 7 }).map((_, index) => (
          <button key={index} className={upcomingStyles.dateButton} disabled />
        ))}
      </div>
      <div className={upcomingStyles.scheduleContainer}>
        {Array.from({ length: 4 }).map((_, index) => (
          <MainActivityCardFallback key={index} />
        ))}
      </div>
      <MainUpcomingSectionPaginationFallback />
    </section>
  );
}

function MainUpcomingSectionPaginationFallback() {
  return (
    <div className={sprinkles({ display: 'flex', gap: 'small', width: '100%', justifyContent: 'center' })}>
      <DirectionButton disabled />
      <DirectionButton direction="right" disabled />
    </div>
  );
}
