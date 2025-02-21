import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { MainScheduleCard } from '@/widget/card/schedule';

import { Button } from '@moeasy/storybook/ui/button';
import { Text } from '@moeasy/storybook/ui/text';

import { MEETING_DETAIL_TAB_LIST } from '../../const';

import * as styles from '../../meeting-detail.css';

export function MeetingDetailActivity() {
  return (
    <section className={sprinkles({ width: '100%', display: 'flex', flexDirection: 'column', gap: 'medium' })}>
      <div
        className={sprinkles({
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        })}
      >
        <Text title="medium" id={MEETING_DETAIL_TAB_LIST['1'].key}>
          활동 (3)
        </Text>
        <Button rounded="large" size="small">
          활동 만들기
        </Button>
      </div>
      <div className={styles.activityContainer}>
        {Array.from({ length: 3 }, (_, index) => ({
          id: index,
          name: '새해맞이 달력만들기',
          isOnlineYn: true,
          description: '',
          location: '성남시',
          time: '2025-02-10T09:00:00Z',
          memberCount: 20,
          isLiked: false,
        })).map((item) => (
          <MainScheduleCard key={item.id} schedule={item} />
        ))}
      </div>
    </section>
  );
}
