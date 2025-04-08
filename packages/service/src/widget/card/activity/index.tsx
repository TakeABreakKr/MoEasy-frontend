'use client';

import { ComponentPropsWithRef, useReducer } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { overlay } from 'overlay-kit';

import { isAdminAutority } from '@/entities';
import { HomeUpcomingActivityDto } from '@/entities/main/api';
import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Button } from '@moeasy/storybook/ui/button';
import { CardTrigger, CardTriggerItem } from '@moeasy/storybook/ui/card/compound-card';
import { CalendarHomeIcon, DoorIcon, EllipsisIcon, LocationIcon, UserIcon } from '@moeasy/storybook/ui/icon';
import { Separator } from '@moeasy/storybook/ui/separator';
import { Text } from '@moeasy/storybook/ui/text';

import { ActivityWithdrawPopup } from './popup/withdraw';

import * as styles from './activity.css';

export type MainActivityCardProps = ComponentPropsWithRef<'div'> & {
  activity: HomeUpcomingActivityDto;
  showDeadline?: boolean;
  participate?: boolean;
};

export function MainActivityCard({
  className,
  activity,
  showDeadline = false,
  participate = false,
  ...props
}: MainActivityCardProps) {
  const [isParticipate, toggleParticipate] = useReducer((e) => !e, false);
  const showingParticipants = activity.participants.slice(0, 6);
  return (
    <div className={clsx(styles.activityCard, className)} {...props}>
      {showDeadline && (
        <div className={sprinkles({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
          <div className={sprinkles({ display: 'flex', gap: 'small', alignItems: 'center' })}>
            <Text headline="medium">5/1 (목)</Text>
            <Text title="large" className={styles.activityDeadLine}>
              D-4
            </Text>
          </div>
          <CardTrigger>
            <CardTriggerItem padding align="center" asChild>
              <Link href="/meeting/modify">수정하기</Link>
            </CardTriggerItem>
            <Separator direction="horizontal" color="#cfcfcf" />
            <CardTriggerItem
              padding
              align="center"
              notice
              onClick={() => overlay.open(({ unmount }) => <ActivityWithdrawPopup close={unmount} />)}
            >
              삭제하기
            </CardTriggerItem>
          </CardTrigger>
        </div>
      )}
      <div>
        <div className={sprinkles({ display: 'flex', gap: 'medium', alignItems: 'stretch' })}>
          <Image
            src="https://placehold.co/55/png"
            alt="thumbnail"
            width={55}
            height={55}
            className={styles.activityCardThumbnail}
          />
          <div className={styles.activityTitleWrapper}>
            <div className={sprinkles({ display: 'flex', gap: 'small', alignItems: 'center' })}>
              <span className={styles.activityOnlineOrOffline[activity.isOnlineYn ? 'online' : 'offline']}>
                {activity.isOnlineYn ? '온라인' : '오프라인'}
              </span>
              <Text asChild ellipsis title="large">
                <h2>{activity.meetingName}</h2>
              </Text>
            </div>
            <Text body="medium">안녕하세요..!</Text>
          </div>
          {participate && (
            <div className={sprinkles({ display: 'flex', alignItems: 'center' })}>
              <Button
                variant={isParticipate ? 'light' : 'dark'}
                size="small"
                rounded="medium"
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
          {activity.meetingName}
        </Text>
        <Text label="large" semibold className={styles.contentText}>
          <div className={styles.iconContainer}>
            <LocationIcon />
          </div>
          {activity.region}
        </Text>
        <Text label="large" semibold className={styles.contentText}>
          <div className={styles.iconContainer}>
            <CalendarHomeIcon />
          </div>
          {activity.time}
        </Text>
        <Text label="large" semibold className={styles.contentText}>
          <div className={styles.iconContainer}>
            <UserIcon />
          </div>
          <span className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'small' })}>
            <div className={styles.memberIconContainer} style={{ width: showingParticipants.length * 16 }}>
              {showingParticipants.map((participant, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    styles.memberIconByRole[isAdminAutority(participant.authority) ? participant.authority : 'MEMBER'],
                    styles.memberIconDepth[(idx + 1) as 1 | 2 | 3 | 4 | 5 | 6],
                  )}
                >
                  <Image src={participant.thumbnail} width={30} height={30} alt={participant.authority} />
                </div>
              ))}
            </div>
            <EllipsisIcon width={12} />
            {activity.participantCount}/{activity.participantLimit}명
          </span>
        </Text>
      </div>
    </div>
  );
}
