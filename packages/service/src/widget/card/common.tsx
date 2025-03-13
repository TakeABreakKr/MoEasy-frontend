'use client';

import { ComponentPropsWithRef, useReducer } from 'react';

import { components } from '@/shared/api/my-schema';
import { sprinkles } from '@/shared/style/sprinkles/index.css';

import {
  CardDescription,
  CardHeader,
  CardThumbnail,
  CardTitle,
  CardWrapper,
} from '@moeasy/storybook/ui/card/compound-card';
import { HeartToggle } from '@moeasy/storybook/ui/heart';
import { UserIcon } from '@moeasy/storybook/ui/icon';

import { titleEllipsis } from './card.css';

export type MeetingCardProps = {
  meeting: components['schemas']['HomePopularMeetingDto'];
} & ComponentPropsWithRef<'div'>;

export function MainCommonCard({ meeting, ...props }: MeetingCardProps) {
  const [heart, toggle] = useReducer((e) => !e, false);
  return (
    <CardWrapper data-meeting-index={meeting.id} {...props}>
      <CardThumbnail src={meeting.thumbnail ?? `https://placehold.co/72/png`} alt={meeting.name} />
      <CardHeader />
      <div>
        <CardTitle className={sprinkles({ display: 'flex', justifyContent: 'space-between' })}>
          <span className={titleEllipsis}>{meeting.name}</span>
          <HeartToggle active={heart} onClick={toggle} />
        </CardTitle>
        <CardDescription>{meeting.explanation}</CardDescription>
        <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'small', paddingBottom: 'large' })}>
          <UserIcon width={15} /> {meeting.memberCount}명
        </div>
      </div>
    </CardWrapper>
  );
}
