import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

import buttonStyles from './button.module.css';

type ButtonProps = {
  /**
   * 버튼의 테마
   */
  variant?: 'dark' | 'light' | 'primary' | 'ghost';
  /**
   * 버튼의 크기
   */
  size?: 'small' | 'medium' | 'large' | 'thick';
  /**
   * 버튼 외곽의 굴곡
   */
  rounded?: 'small' | 'medium' | 'large';
  asChild?: boolean;
} & ComponentPropsWithoutRef<'button'>;

/**
 * 기본 버튼 컴포넌트
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'dark', size, rounded, asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={clsx(
          buttonStyles.button,
          size && buttonStyles[size],
          rounded && buttonStyles[`rounded-${rounded}`],
          buttonStyles[variant],
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
