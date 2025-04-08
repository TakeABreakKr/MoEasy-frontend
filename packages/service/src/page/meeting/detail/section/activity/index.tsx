import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { MainActivityCard, MainActivityCardProps } from '@/widget/card/activity';

import { Button } from '@moeasy/storybook/ui/button';
import { Text } from '@moeasy/storybook/ui/text';
import { delay } from '@moeasy/storybook/utils/lib/delay';

import { MEETING_DETAIL_TAB_LIST } from '../../const';

import * as styles from '../../meeting-detail.css';

// TODO: Remove After API developed
const fetchSampleActivity = async (): Promise<MainActivityCardProps['activity'][]> =>
  delay(1000).then(() =>
    Array.from({ length: 3 }, (_, index) => ({
      id: index,
      activityName: '새해맞이 달력만들기',
      thumbnail: 'https://placehold.co/30/png',
      isOnlineYn: true,
      meetingName: 'Meeting 1',
      description: '랜덤한 랜덤한 아름다운',
      region: '성남시',
      time: '2025-02-10T09:00:00Z',
      participantCount: 20,
      participantLimit: 100,
      participants: [
        { authority: 'OWNER', thumbnail: 'https://placehold.co/30/png' },
        { authority: 'MANAGER', thumbnail: 'https://placehold.co/30/png' },
        ...Array.from({ length: Math.floor(Math.random() * 4) }, (_) => ({
          authority: 'MEMBER' as const,
          thumbnail: `https://placehold.co/30/png`,
        })),
      ],
      onlineLink: 'http://localhost:5000',
      isLiked: false,
      category: '식물/자연',
      publicYn: true,
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
        <Button rounded="medium" size="small">
          활동 만들기
        </Button>
      </div>
      <div className={styles.activityContainer}>
        {activities.map((item) => (
          <MainActivityCard key={item.id} activity={item} showDeadline participate />
        ))}
      </div>
    </section>
  );
}
