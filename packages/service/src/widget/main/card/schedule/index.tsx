import { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { HomeUpcomingActivityDto } from '@/entities/main/api';
import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { ClockIcon, DoorIcon, EllipsisIcon, HeartIcon, LocationIcon, UserIcon } from '@moeasy/storybook/ui/icon';
import { Text } from '@moeasy/storybook/ui/text';

import * as styles from './schedule.css';

export type MainScheduleCardProps = ComponentPropsWithoutRef<'div'> & {
  schedule: HomeUpcomingActivityDto;
};

const dummyMemberThumbnails = [
  { role: 'owner', src: 'https://via.placeholder.com/20' },
  { role: 'manager', src: 'https://via.placeholder.com/20' },
  { role: 'common', src: 'https://via.placeholder.com/20' },
  { role: 'common', src: 'https://via.placeholder.com/20' },
  { role: 'common', src: 'https://via.placeholder.com/20' },
  { role: 'common', src: 'https://via.placeholder.com/20' },
] as const;

export function MainScheduleCard({ className, schedule, ...props }: MainScheduleCardProps) {
  return (
    <div className={clsx(styles.scheduleCard, className)} {...props}>
      <div className={styles.scheduleCardHeader}>
        <div className={styles.scheduleCardThumbnail}></div>
        <div className={sprinkles({ flex: 1 })}>
          <Text title="medium" semibold className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'small' })}>
            {schedule.name}
            <div className={styles.heart}>
              <HeartIcon color="red" />
            </div>
          </Text>
          <span className={styles.scheduleOnlineOrOffline[schedule.isOnlineYn ? 'online' : 'offline']}>
            {schedule.isOnlineYn ? '온라인' : '오프라인'}
          </span>
        </div>
      </div>
      <div className={styles.content}>
        <Text label="large" semibold className={styles.contentText}>
          <div className={styles.iconContainer}>
            <DoorIcon />
          </div>
          {schedule.description}
        </Text>
        <Text label="large" semibold className={styles.contentText}>
          <div className={styles.iconContainer}>
            <LocationIcon />
          </div>
          {schedule.location}
        </Text>
        <Text label="large" semibold className={styles.contentText}>
          <div className={styles.iconContainer}>
            <ClockIcon />
          </div>
          {schedule.time}
        </Text>
        <Text label="large" semibold className={styles.contentText}>
          <div className={styles.iconContainer}>
            <UserIcon />
          </div>
          <span className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'small' })}>
            <div className={styles.memberIconContainer}>
              {dummyMemberThumbnails.map((thumbnail, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    styles.memberIconByRole[thumbnail.role],
                    styles.memberIconDepth[(idx + 1) as 1 | 2 | 3 | 4 | 5 | 6],
                  )}
                >
                  <Image src={thumbnail.src} width={30} height={30} alt={thumbnail.role} />
                </div>
              ))}
            </div>
            <EllipsisIcon width={12} />
            {schedule.memberCount}/20명
          </span>
        </Text>
      </div>
    </div>
  );
}
