import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { MainScheduleCard } from '@/widget/card/schedule';

import { Button } from '@moeasy/storybook/ui/button';
import { Text } from '@moeasy/storybook/ui/text';
import { delay } from '@moeasy/storybook/utils/lib/delay';

import { MEETING_DETAIL_TAB_LIST } from '../../const';

import * as styles from '../../meeting-detail.css';

// TODO: Remove After API developed
const fetchSampleActivity = async () =>
  delay(1000).then(() =>
    Array.from({ length: 3 }, (_, index) => ({
      id: index,
      name: '새해맞이 달력만들기',
      isOnlineYn: true,
      description: '랜덤한 랜덤한 아름다운',
      location: '성남시',
      time: '2025-02-10T09:00:00Z',
      memberCount: 20,
      isLiked: false,
    })),
  );

export async function MeetingDetailActivity() {
  const activities = await fetchSampleActivity();
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
        {activities.map((item) => (
          <MainScheduleCard key={item.id} schedule={item} showDeadline participate />
        ))}
      </div>
    </section>
  );
}
