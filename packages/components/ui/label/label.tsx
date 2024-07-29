import { ComponentPropsWithoutRef, forwardRef } from 'react';
import clsx from 'clsx';

import { InfoIcon } from '../icon';

import * as labelStyles from './label.css';

type LabelProps = {
  variant?: 'error' | 'success' | 'none';
} & ComponentPropsWithoutRef<'label'>;

/**
 * 기본 버튼 컴포넌트
 */
const Label = forwardRef<HTMLLabelElement, LabelProps>(({ variant = 'none', className, children, ...props }, ref) => {
  return (
    <label className={clsx(labelStyles.label({ variant }), className)} ref={ref} {...props}>
      <span className={clsx(labelStyles.labelIcon({ variant }))}>
        <InfoIcon color="white" />
      </span>
      {children}
    </label>
  );
});
Label.displayName = 'Label';

export { Label };
