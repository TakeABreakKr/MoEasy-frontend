import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { buttonVariants } from './button.css';

type ButtonProps = {
  asChild?: boolean;
} & ComponentPropsWithoutRef<'button'> &
  RecipeVariants<typeof buttonVariants>;

/**
 * 기본 버튼 컴포넌트
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'dark', size, rounded, asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={clsx(buttonVariants({ variant, size, rounded }), className)} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button };
