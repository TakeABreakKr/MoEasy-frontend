import { HTMLAttributes } from 'react';
import clsx from 'clsx';

import AlarmItem from './item/item';

import alarmStyle from './alarm.module.css';

export type AlarmItemProps = {
  idx: number;
  title: string;
  description?: string;
  thumbnail?: string;
} & HTMLAttributes<HTMLDivElement>;

export type AlarmProps = {
  direction?: 'left-bottom' | 'left-top' | 'right-bottom' | 'right-top';
  itemList: AlarmItemProps[];
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export default function Alarm({ itemList, className, direction = 'left-top', ...props }: AlarmProps) {
  return (
    <div className={clsx(alarmStyle.wrapper, className)} data-direction={direction} {...props}>
      {itemList.map((item) => (
        <AlarmItem key={item.idx} {...item} />
      ))}
    </div>
  );
}
