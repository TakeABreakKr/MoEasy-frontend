import { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { HomeUpcomingActivityDto } from '@/entities/main/api';
import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { CalendarHomeIcon, DoorIcon, EllipsisIcon, HeartIcon, LocationIcon, UserIcon } from '@moeasy/storybook/ui/icon';
import { Text } from '@moeasy/storybook/ui/text';

import * as styles from './schedule.css';

export type MainScheduleCardProps = ComponentPropsWithoutRef<'div'> & {
  schedule: HomeUpcomingActivityDto;
};

const dummyMemberThumbnails = [
  { role: 'owner', src: 'https://placehold.co/30/png' },
  { role: 'manager', src: 'https://placehold.co/30/png' },
  { role: 'common', src: 'https://placehold.co/30/png' },
  { role: 'common', src: 'https://placehold.co/30/png' },
  { role: 'common', src: 'https://placehold.co/30/png' },
  { role: 'common', src: 'https://placehold.co/30/png' },
] as const;

export function MainScheduleCard({ className, schedule, ...props }: MainScheduleCardProps) {
  return (
    <div className={clsx(styles.scheduleCard, className)} {...props}>
      <div className={styles.scheduleCardHeader}>
        <div className={styles.scheduleCardThumbnail}></div>
        <div className={sprinkles({ flex: 1 })}>
          <h2 className={styles.scheduleTitle}>
            {schedule.name}
            <div className={styles.heart}>
              <HeartIcon color="red" />
            </div>
          </h2>
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
            <CalendarHomeIcon />
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
