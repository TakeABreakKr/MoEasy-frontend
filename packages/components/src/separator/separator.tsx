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
    <span
      style={assignInlineVars({
        [separatorColor]: color,
      })}
      className={separatorVariants({ direction })}
    />
  );
}
