import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

import Image from 'next/image';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../dropdown-menu/dropdown-menu';
import { EllipsisIcon } from '../icon';
import { NameTagProps } from '../tag/nametag/nametag';

import { magic } from '../../utils/styles/index.css';
import * as cardStyle from './card.css';

type CardWrapperProps = ComponentPropsWithoutRef<'div'> & { asChild?: boolean };

const CardWrapper = forwardRef<HTMLDivElement, CardWrapperProps>(function (
  { className, asChild, ...props },
  forwardedRef,
) {
  const Comp = asChild ? Slot : 'div';
  return <Comp ref={forwardedRef} className={clsx(cardStyle.card, className)} {...props} />;
});
CardWrapper.displayName = 'CardWrapper';

function CardThumbnail({ src, alt = 'Thumbnail' }: { src?: string; alt: string }) {
  return (
    <div className={cardStyle.thumbnailWrapper}>
      <div className={cardStyle.thumbnail}>
        <Image src={src ?? `https://via.placeholder.com/72/${1}`} width={72} height={72} alt={alt} />
      </div>
    </div>
  );
}

const CardHeader = forwardRef<HTMLDivElement, CardWrapperProps>(function (
  { className, asChild, ...props },
  forwardedRef,
) {
  const Comp = asChild ? Slot : 'div';
  return <Comp ref={forwardedRef} className={cardStyle.interact} {...props} />;
});
CardHeader.displayName = 'CardHeader';

/**
 * dropdown menu를 포함할 수 있는 Card의 Trigger
 */
function CardTrigger({ children }: { children?: React.ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={clsx(magic, cardStyle.triggerButton)}>
          <EllipsisIcon height={4} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" isPortal={false}>
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function CardTitle({ children }: { children?: React.ReactNode }) {
  return <h2 className={cardStyle.title}>{children ?? 'Card Title'}</h2>;
}

function CardDescription({ children }: { children?: React.ReactNode }) {
  return <pre className={cardStyle.description}>{children ?? 'Card Description'}</pre>;
}

const CardTagsWrapper = forwardRef<HTMLDivElement, CardWrapperProps>(function (
  { className, asChild, ...props },
  forwardedRef,
) {
  const Comp = asChild ? Slot : 'div';
  return <Comp ref={forwardedRef} className={clsx(cardStyle.tagWrapper, className)} {...props} />;
});
CardTagsWrapper.displayName = 'CardTagsWrapper';

export type CardMember = { name?: string; avatar?: string; userRole?: NameTagProps['userRole'] };

export {
  CardDescription,
  CardHeader,
  CardTagsWrapper,
  CardThumbnail,
  CardTitle,
  CardTrigger,
  DropdownMenuItem as CardTriggerItem,
  CardWrapper,
};
