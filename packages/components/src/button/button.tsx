import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

import buttonStyles from './button.module.css';

type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * 기본 버튼 컴포넌트
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ primary = false, size = 'medium', asChild, ...props }, ref) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={clsx(buttonStyles.button, buttonStyles[`button--${size}`], buttonStyles[mode])}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
