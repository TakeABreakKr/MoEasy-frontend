import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

import { Button } from '../button';
import { XIcon } from '../icon';

import * as tagStyle from './tag.css';

export type TagProps = Omit<ComponentPropsWithoutRef<typeof Button>, 'size' | 'rounded' | 'asChild'> & {
  variant?: 'dark' | 'light';
  isDelete?: boolean;
};

export const Tag = ({ variant = 'light', className, isDelete, children, ...props }: TagProps) => {
  return (
    <button className={clsx(tagStyle.tagVariant({ variant, isDelete }), className)} {...props}>
      {children}
      {isDelete && (
        <Button
          asChild
          variant={variant === 'dark' ? 'light' : 'dark'}
          className={tagStyle.deleteButton}
          rounded="full"
        >
          <span>
            <XIcon color="white" width={8} height={8} />
          </span>
        </Button>
      )}
    </button>
  );
};
