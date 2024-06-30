import clsx from 'clsx';

import Image from 'next/image';

import { AlarmItemProps } from '../alarm';

import cardAlarmStyle from './item.module.css';

/**
 * 팝업 창에 표시할 알림 메시지 아이템
 */
export default function AlarmItem({ idx, title, className, description = '', thumbnail, ...props }: AlarmItemProps) {
  return (
    <div className={clsx(cardAlarmStyle.card, className)} {...props}>
      <div className={cardAlarmStyle.thumbnail}>
        <Image src={thumbnail ?? `https://via.placeholder.com/100/${idx}`} width={100} height={100} alt={title} />
      </div>
      <div className={cardAlarmStyle.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
