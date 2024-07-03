import { CSSProperties } from 'react';
import clsx from 'clsx';

import styles from './separator.module.css';

export default function Separator({
  direction = 'vertical',
  color,
}: {
  direction?: 'vertical' | 'horizontal';
  color: string;
}) {
  return (
    <span
      className={clsx(styles.separator, styles[`separator-${direction}`])}
      style={{ '--separator-color': color } as CSSProperties}
    />
  );
}
