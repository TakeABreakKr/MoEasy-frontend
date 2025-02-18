import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { MainCommonCardFallback } from '@/widget/card/fallback';
import { MainScheduleCardFallback } from '@/widget/card/schedule/fallback';

import { DirectionButton } from '@moeasy/storybook/ui/button';

import { sectionHeaderFallback } from '../fallback.css';
import { activityCard } from './activity/activity.css';
import * as styles from './section.css';

export function MainCardSectionFallback({ type = 'meeting' }: { type?: keyof typeof styles.cardWrapper }) {
  return (
    <section className={styles.section}>
      <MainCardSectionHeaderFallback />
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper[type]}>
          {Array.from({ length: 3 }).map((_, index) => {
            switch (type) {
              case 'meeting':
                return <MainCommonCardFallback key={index} />;
              case 'activity':
                return <MainScheduleCardFallback key={index} className={activityCard} />;
              default:
                return null;
            }
          })}
        </div>
        <div className={styles.overlayNoPointer} />
      </div>
    </section>
  );
}

export function MainCardSectionHeaderFallback() {
  return (
    <div
      className={sprinkles({ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}
    >
      <div className={sectionHeaderFallback} />
      <div className={sprinkles({ display: 'flex', gap: 'small' })}>
        <DirectionButton direction="left" disabled />
        <DirectionButton direction="right" disabled />
      </div>
    </div>
  );
}
