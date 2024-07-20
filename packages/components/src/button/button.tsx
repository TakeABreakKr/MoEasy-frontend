import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

import buttonStyles from './button.module.css';

type ButtonProps = {
  /**
   * 버튼의 테사
   */
  variant?: 'dark' | 'light' | 'primary' | 'ghost';
  /**
   * 버튼의 크기
   */
  size?: 'small' | 'medium' | 'large';
  asChild?: boolean;
} & ComponentPropsWithoutRef<'button'>;

/**
 * 기본 버튼 컴포넌트
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'dark', size = 'medium', asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={clsx(buttonStyles.button, buttonStyles[size], buttonStyles[variant], className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
