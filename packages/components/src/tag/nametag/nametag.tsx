import { ComponentPropsWithoutRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

import Image from 'next/image';

import { Button } from '../../button';

import nameTagStyle from './nametag.module.css';

export type NameTagProps = ComponentPropsWithoutRef<typeof Button> & {
  src?: string;
  userRole?: 'admin' | 'manager' | 'limit';
};

export const NameTag = ({ asChild, userRole, className, src, children, ...props }: NameTagProps) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={clsx(
        nameTagStyle.badge,
        userRole && nameTagStyle[userRole],
        !!src && nameTagStyle['icon-contain'],
        className,
      )}
      {...props}
    >
      {src && <NameTagIcon src={src} alt={children?.toString() ?? 'user-thumbnail'} />}
      {children}
    </Comp>
  );
};

const NameTagIcon = ({
  alt = 'userThumbnail',
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Image>, 'width' | 'height'>) => (
  <span className={nameTagStyle.icon}>
    <Image width={30} height={30} alt={alt} {...props} />
  </span>
);
