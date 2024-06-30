import React, { HTMLAttributes } from 'react';
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from '@radix-ui/react-hover-card';

import Alarm from '../alarm/wrapper/wrapper';
import { AlarmIcon } from '../icon';

import alarmStyle from './alarm.module.css';

export type AlarmItemProps = {
  idx: number;
  title: string;
  description?: string;
  thumbnail?: string;
} & HTMLAttributes<HTMLDivElement>;

export type AlarmProps = {
  direction?: 'left-bottom' | 'left-top' | 'right-bottom' | 'right-top';
  itemList?: AlarmItemProps[];
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

const AlarmHover = ({ itemList = [] }: AlarmProps) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <div className={alarmStyle.ImageTrigger}>
        <AlarmIcon width={24} height={24} />
        {itemList.length !== 0 && (
          <span role="alert" style={{ position: 'absolute', width: 5, height: 5, background: 'red' }}></span>
        )}
      </div>
    </HoverCardTrigger>
    <HoverCardPortal>
      <HoverCardContent className={alarmStyle.HoverCardContent} sideOffset={30}>
        <Alarm itemList={itemList}></Alarm>
        <HoverCardArrow className={alarmStyle.HoverCardArrow} />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCard>
);

export default AlarmHover;
