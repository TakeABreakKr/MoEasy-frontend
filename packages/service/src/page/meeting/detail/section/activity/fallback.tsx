import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { MainActivityCardFallback } from '@/widget/card/activity/fallback';

import { Button } from '@moeasy/storybook/ui/button';

import * as styles from '../../meeting-detail.css';
import { sectionHeaderFallback } from '../section.css';

export async function MeetingDetailActivityFallback() {
  return (
    <section className={sprinkles({ width: '100%', display: 'flex', flexDirection: 'column', gap: 'medium' })}>
      <div
        className={sprinkles({
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        })}
      >
        <div className={sectionHeaderFallback} />
        <Button rounded="large" size="small" disabled>
          활동 만들기
        </Button>
      </div>
      <div className={styles.activityContainer}>
        {Array.from({ length: 4 }).map((_, index) => (
          <MainActivityCardFallback key={index} showDeadline />
        ))}
      </div>
    </section>
  );
}
