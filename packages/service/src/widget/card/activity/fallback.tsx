import clsx from 'clsx';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { cardDescriptionFallback, cardTitleFallback } from '../card.css';
import * as styles from './activity.css';

export function MainActivityCardFallback({ className, showDeadline }: { className?: string; showDeadline?: boolean }) {
  return (
    <div className={clsx(styles.scheduleCard, className)}>
      {showDeadline && <div className={styles.contentFallbackVariants.date} />}
      <div>
        <div className={sprinkles({ display: 'flex', gap: 'medium', alignItems: 'stretch' })}>
          <div className={styles.scheduleCardThumbnail} />
          <div className={styles.scheduleTitleFallback}>
            <div className={cardTitleFallback} />
            <div className={cardDescriptionFallback} />
          </div>
        </div>
      </div>
      <div className={clsx(styles.content, sprinkles({ gap: 'xsmall' }))}>
        <div className={styles.contentFallbackVariants.region} />
        <div className={styles.contentFallbackVariants.region} />
        <div className={styles.contentFallbackVariants.date} />
        <div className={styles.contentFallbackVariants.limit} />
      </div>
    </div>
  );
}
