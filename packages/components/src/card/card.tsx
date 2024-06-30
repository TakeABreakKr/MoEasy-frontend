import { HTMLAttributes } from 'react';
import clsx from 'clsx';

import Image from 'next/image';

import { Button } from '../button/button';
import { HeartIcon } from '../icon';

import cardStyle from './card.module.css';

export type CardProps = {
  idx: number;
  title: string;
  description?: string;
  thumbnail?: string;
  count?: number;
  maxCount?: number;
  isLiked?: boolean;
  isWaiting?: boolean;
  onLikeClick?: () => void;
} & HTMLAttributes<HTMLDivElement>;

export default function Card({
  idx,
  title,
  className,
  description = '',
  count = 0,
  isWaiting,
  maxCount = 10,
  onLikeClick,
  ...props
}: CardProps) {
  return (
    <div className={clsx(cardStyle.card, className)} {...props}>
      <div className={cardStyle.thumbnail}>
        <Image src={`https://via.placeholder.com/120/${idx}`} width={120} height={120} alt={title} />
      </div>
      <div className={cardStyle.interact}>
        <button onClick={onLikeClick}>
          <HeartIcon width={30} height={30} className={cardStyle.like} />
        </button>
        <Button size="small">참여하기</Button>
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <span>{count}</span>/<span>{maxCount}</span>명 | {isWaiting ? '대기 (2)' : ''} 개설일 : 2021.07.30
      </div>
      <p>{description}</p>
    </div>
  );
}
