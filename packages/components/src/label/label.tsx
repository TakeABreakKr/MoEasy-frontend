import { ComponentPropsWithoutRef, forwardRef } from 'react';
import clsx from 'clsx';

import { InfoIcon } from '@/icon';

import labelStyles from './label.module.css';

type LabelProps = {
  variant?: 'error' | 'success' | 'none';
} & ComponentPropsWithoutRef<'label'>;

/**
 * 기본 버튼 컴포넌트
 */
const Label = forwardRef<HTMLLabelElement, LabelProps>(({ variant = 'none', className, children, ...props }, ref) => {
  return (
    <label className={clsx(labelStyles.label, labelStyles[variant], className)} ref={ref} {...props}>
      {variant === 'error' && (
        <span className={clsx(labelStyles.icon, labelStyles['icon-error'])}>
          <InfoIcon color="white" />
        </span>
      )}
      {variant === 'success' && (
        <span className={clsx(labelStyles.icon, labelStyles['icon-success'])}>
          <InfoIcon color="white" />
        </span>
      )}
      {children}
    </label>
  );
});
Label.displayName = 'Label';

export { Label };
