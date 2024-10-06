'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { separatorColor, separatorVariants } from './separator.css';
import clsx from 'clsx';

export default function Separator({
  direction = 'vertical',
  color = 'currentColor',
  className,
}: {
  direction?: 'vertical' | 'horizontal';
  color?: string;
  className?: string;
}) {
  return (
    <div
      style={assignInlineVars({
        [separatorColor]: color,
      })}
      className={clsx(separatorVariants({ direction }), className)}
    />
  );
}
