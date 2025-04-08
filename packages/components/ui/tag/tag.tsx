import { ComponentProps } from 'react';
import clsx from 'clsx';

import { Button } from '../button';
import { XIcon } from '../icon';

import * as tagStyle from './tag.css';

export type TagProps = Omit<ComponentProps<typeof Button>, 'size' | 'rounded' | 'asChild'> & {
  variant?: 'dark' | 'light';
  isDelete?: boolean;
  onDeleteClick?: () => void;
};

export const Tag = ({
  variant = 'light',
  type = 'button',
  className,
  isDelete,
  children,
  onDeleteClick,
  ...props
}: TagProps) => {
  return (
    <button className={clsx(tagStyle.tagVariant({ variant, isDelete }), className)} type={type} {...props}>
      {children}
      {isDelete && (
        <Button
          asChild
          type="button"
          variant={variant === 'dark' ? 'light' : 'dark'}
          className={tagStyle.deleteButton}
          rounded="full"
          onClick={(e) => {
            if (onDeleteClick) {
              e.stopPropagation();
              onDeleteClick();
            }
          }}
        >
          <span>
            <XIcon width={8} height={8} />
          </span>
        </Button>
      )}
    </button>
  );
};
