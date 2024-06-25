import clsx from 'clsx';

import { AlarmProps } from '../alarm';
import AlarmItem from '../item/item';

import alarmStyle from './wrapper.module.css';

export default function Alarm({ itemList = [], className, direction = 'left-top', ...props }: AlarmProps) {
  return (
    <div className={clsx(alarmStyle.wrapper, className)} data-direction={direction} {...props}>
      {itemList.map((item) => (
        <AlarmItem key={item.idx} {...item} />
      ))}
    </div>
  );
}
