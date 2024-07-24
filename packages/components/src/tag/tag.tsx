import { ComponentPropsWithoutRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

import { XIcon } from '@/icon';

import { Button } from '../button';

import tagStyle from './tag.module.css';

export type TagProps = Omit<ComponentPropsWithoutRef<typeof Button>, 'size' | 'rounded'> & {
  variant?: 'dark' | 'light';
  isDelete?: boolean;
};

export const Tag = ({ asChild, variant = 'light', className, isDelete, children, ...props }: TagProps) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={clsx(tagStyle.tag, tagStyle[variant], !!isDelete && tagStyle['delete-contain'], className)}
      {...props}
    >
      {children}
      {isDelete && (
        <Button variant={variant === 'dark' ? 'light' : 'dark'} className={tagStyle['delete-button']} rounded="full">
          <XIcon color="white" width={8} height={8} />
        </Button>
      )}
    </Comp>
  );
};
