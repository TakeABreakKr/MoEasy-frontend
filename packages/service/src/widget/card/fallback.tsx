import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { CardHeader, CardThumbnail, CardWrapper } from '@moeasy/storybook/ui/card/compound-card';

import * as styles from './card.css';

export function MainCommonCardFallback() {
  return (
    <CardWrapper className={styles.commonCard}>
      <CardThumbnail />
      <CardHeader />
      <div className={styles.cardInfo}>
        <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 'xsmall' })}>
          <div className={styles.cardTitleFallback} />
          <div className={styles.cardDescriptionFallback} />
        </div>
        <div className={styles.cardMeetingLimitFallback} />
      </div>
    </CardWrapper>
  );
}
