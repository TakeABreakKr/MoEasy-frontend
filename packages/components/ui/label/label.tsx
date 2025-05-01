import { ComponentProps } from 'react';
import clsx from 'clsx';

import { InfoIcon } from '../icon';

import * as labelStyles from './label.css';

type LabelProps = {
  variant?: 'error' | 'success' | 'none';
} & ComponentProps<'label'>;

/**
 * 기본 버튼 컴포넌트
 */
function Label({ variant = 'none', className, children, ...props }: LabelProps) {
  return (
    <label className={clsx(labelStyles.label({ variant }), className)} {...props}>
      {variant !== 'none' && (
        <span className={clsx(labelStyles.labelIcon({ variant }))}>
          <InfoIcon color="white" />
        </span>
      )}
      {children}
    </label>
  );
}

export { Label };
