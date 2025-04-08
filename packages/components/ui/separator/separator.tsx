'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';

import { separatorColor, separatorVariants } from './separator.css';

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
