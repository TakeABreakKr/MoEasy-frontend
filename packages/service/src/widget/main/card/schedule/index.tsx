import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { ClockIcon, DoorIcon, HeartIcon, LocationIcon, UserIcon } from '@moeasy/storybook/ui/icon';
import { Text } from '@moeasy/storybook/ui/text';

import * as styles from './schedule.css';

export function MainScheduleCard({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx(styles.scheduleCard, className)} {...props}>
      <div className={sprinkles({ display: 'flex' })}>
        <div className={styles.scheduleCardThumbnail}>thumbnail</div>
        <div>
          <Text title="medium" semibold>
            배드민턴
          </Text>
          <span className={styles.scheduleIsOnline}>온라인</span>
        </div>
        <div className={styles.heart}>
          <HeartIcon color="red" />
        </div>
      </div>
      <Text label="large" semibold className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'small' })}>
        <DoorIcon /> 배린이들, 신입 모집중
      </Text>
      <Text label="large" semibold className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'small' })}>
        <LocationIcon /> 성남시
      </Text>
      <Text label="large" semibold className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'small' })}>
        <ClockIcon /> 오후 2:00
      </Text>

      <Text label="large" semibold className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'small' })}>
        <UserIcon width={16} /> 19/20명
      </Text>
    </div>
  );
}
