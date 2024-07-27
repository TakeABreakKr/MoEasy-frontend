import { CSSProperties } from 'react';

import { separatorVariants, separatorColor } from './separator.css';

export default function Separator({
  direction = 'vertical',
  color = 'currentColor',
}: {
  direction?: 'vertical' | 'horizontal';
  color?: string;
}) {
  return <span className={separatorVariants({ direction })} style={{ [separatorColor]: color } as CSSProperties} />;
}
