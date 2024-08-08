'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { separatorColor, separatorVariants } from './separator.css';

export default function Separator({
  direction = 'vertical',
  color = 'currentColor',
}: {
  direction?: 'vertical' | 'horizontal';
  color?: string;
}) {
  return (
    <div
      style={assignInlineVars({
        [separatorColor]: color,
      })}
      className={separatorVariants({ direction })}
    />
  );
}
