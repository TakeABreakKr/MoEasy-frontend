'use client';

import { useReducer } from 'react';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { CardProps } from '@moeasy/storybook/ui/card';
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

export function MainCommonCard({ idx, title, description = '', count = 0, maxCount = 10, ...props }: CardProps) {
  const [heart, toggle] = useReducer((e) => !e, false);
  return (
    <CardWrapper data-meeting-index={idx} {...props}>
      <CardThumbnail src={`https://placehold.co/72/png`} alt={title} />
      <CardHeader />
      <div>
        <CardTitle className={sprinkles({ display: 'flex', justifyContent: 'space-between' })}>
          <span className={titleEllipsis}>{title.repeat(30)}</span>
          <HeartToggle active={heart} onClick={toggle} />
        </CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'small', paddingBottom: 'large' })}>
          <UserIcon width={15} /> {count}명
        </div>
      </div>
    </CardWrapper>
  );
}
