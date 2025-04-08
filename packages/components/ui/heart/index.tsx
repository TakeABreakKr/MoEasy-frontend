import { ComponentProps } from 'react';
import clsx from 'clsx';

import { HeartIcon } from '../icon';

import * as styles from './heart.css';

type HeartToggleProps = Omit<ComponentProps<'button'>, 'children'> & { active?: boolean };

export function HeartToggle({ active, ...props }: HeartToggleProps) {
  return (
    <button className={clsx(styles.heartWrapper, active && styles.heartActive)} {...props}>
      <HeartIcon />
    </button>
  );
}
