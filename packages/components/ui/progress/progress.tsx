import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

import { LogoIcon } from '../icon';

import * as styles from './progress.css';

export type ProgressProps = {
  max?: number;
  min?: number;
  value?: number;
} & Omit<ComponentPropsWithoutRef<'progress'>, 'max' | 'value'>;

const Progress = ({ className, ...props }: ProgressProps) => {
  const { max = Number.MAX_SAFE_INTEGER, value = 0 } = props;
  const calcSize = value / max;
  const calcLeft = calcSize > 1 ? 1 : calcSize < 0 ? 0 : calcSize;
  return (
    <div className={styles.progressContainer}>
      <progress className={clsx(styles.progressStyle, className)} {...props} />
      <div className={styles.progressLogo} style={{ left: `calc(${calcLeft * 100}% - 12px)` }}>
        <LogoIcon width={32} height={32} />
      </div>
    </div>
  );
};

export default Progress;
