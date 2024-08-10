import React, { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

import Image from 'next/image';

import { Button } from '../button/button';
import { EllipsisIcon } from '../icon';
import { NameTag } from '../tag';

import { magic } from '../../utils/styles/index.css';
import * as cardStyle from './card.css';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../dropdown-menu/dropdown-menu';
import { NameTagProps } from '../tag/nametag/nametag';

function CardWrapper({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={clsx(cardStyle.card, className)} {...props} />;
}

function CardThumbnail({ src, alt = 'Thumbnail' }: { src?: string; alt: string }) {
  return (
    <div className={cardStyle.thumbnailWrapper}>
      <div className={cardStyle.thumbnail}>
        <Image src={src ?? `https://via.placeholder.com/116/${1}`} width={116} height={116} alt={alt} />
      </div>
    </div>
  );
}

/**
 * dropdown menu를 포함할 수 있는 Card의 Trigger
 */
function CardTrigger({ children }: { children?: React.ReactNode }) {
  return (
    <div className={cardStyle.interact}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="small" variant="ghost" rounded="small" className={magic}>
            <EllipsisIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">{children}</DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function CardTitle({ children }: { children?: React.ReactNode }) {
  return <h2 className={cardStyle.title}>{children ?? 'Card Title'}</h2>;
}

function CardDescription({ children }: { children?: React.ReactNode }) {
  return <pre className={cardStyle.description}>{children ?? 'Card Description'}</pre>;
}

export type CardMember = { name?: string; avatar?: string; userRole?: NameTagProps['userRole'] };

function CardMembers({ members }: { members: CardMember[] }) {
  return (
    <div className={cardStyle.memberWrapper}>
      <NameTag userRole="limit">5명</NameTag>
      {members?.map(({ name = 'Member', avatar, userRole }, index) => (
        <NameTag
          key={`${index}-${name}`}
          name={name}
          userRole={userRole}
          src={avatar || `https://via.placeholder.com/30/${index + 1}`}
        >
          {name}
        </NameTag>
      )) ?? null}
      <NameTag>더 보기</NameTag>
    </div>
  );
}

export {
  CardWrapper,
  CardThumbnail,
  CardTitle,
  CardDescription,
  CardMembers,
  CardTrigger,
  DropdownMenuItem as CardTriggerItem,
};
