import clsx from 'clsx';

import styles from './separator.module.css';

export default function Separator({ direction = 'vertical' }: { direction?: 'vertical' | 'horizontal' }) {
  return <span className={clsx(styles.separator, styles[`separator-${direction}`])}></span>;
}
