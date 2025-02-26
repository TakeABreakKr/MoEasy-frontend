'use client';

import { ComponentPropsWithRef, useReducer } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { HomeUpcomingActivityDto } from '@/entities/main/api';
import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Button } from '@moeasy/storybook/ui/button';
import { CalendarHomeIcon, DoorIcon, EllipsisIcon, LocationIcon, UserIcon } from '@moeasy/storybook/ui/icon';
import { Text } from '@moeasy/storybook/ui/text';

import * as styles from './schedule.css';

export type MainScheduleCardProps = ComponentPropsWithRef<'div'> & {
  schedule: HomeUpcomingActivityDto;
  showDeadline?: boolean;
  participate?: boolean;
};

const dummyMemberThumbnails = [
  { role: 'owner', src: 'https://placehold.co/30/png' },
  { role: 'manager', src: 'https://placehold.co/30/png' },
  { role: 'common', src: 'https://placehold.co/30/png' },
  { role: 'common', src: 'https://placehold.co/30/png' },
  { role: 'common', src: 'https://placehold.co/30/png' },
  { role: 'common', src: 'https://placehold.co/30/png' },
] as const;

export function MainScheduleCard({
  className,
  schedule,
  showDeadline = false,
  participate = false,
  ...props
}: MainScheduleCardProps) {
  const [isParticipate, toggleParticipate] = useReducer((e) => !e, false);
  return (
    <div className={clsx(styles.scheduleCard, className)} {...props}>
      {showDeadline && (
        <div className={sprinkles({ display: 'flex', gap: 'small', alignItems: 'center' })}>
          <Text headline="medium">5/1 (목)</Text>
          <Text title="large" className={styles.scheduleDeadLine}>
            D-4
          </Text>
        </div>
      )}
      <div>
        <div className={sprinkles({ display: 'flex', gap: 'medium', alignItems: 'stretch' })}>
          <Image
            src="https://placehold.co/55/png"
            alt="thumbnail"
            width={55}
            height={55}
            className={styles.scheduleCardThumbnail}
          />
          <div className={styles.scheduleTitleWrapper}>
            <div className={sprinkles({ display: 'flex', gap: 'small', alignItems: 'center' })}>
              <span className={styles.scheduleOnlineOrOffline[schedule.isOnlineYn ? 'online' : 'offline']}>
                {schedule.isOnlineYn ? '온라인' : '오프라인'}
              </span>
              <Text asChild ellipsis title="large">
                <h2>{schedule.name}</h2>
              </Text>
            </div>
            <Text body="medium">안녕하세요..!</Text>
          </div>
          {participate && (
            <div className={sprinkles({ display: 'flex', alignItems: 'center' })}>
              <Button
                variant={isParticipate ? 'light' : 'dark'}
                size="small"
                rounded="small"
                onClick={toggleParticipate}
              >
                {isParticipate ? '취소' : '참석'}
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className={clsx(styles.content, sprinkles({ gap: 'small' }))}>
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
