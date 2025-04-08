import { ComponentProps } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { buttonVariants } from './button.css';

type ButtonProps = {
  asChild?: boolean;
} & ComponentProps<'button'> &
  RecipeVariants<typeof buttonVariants>;

/**
 * 기본 버튼 컴포넌트
 */
function Button({ variant = 'dark', size, rounded, asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={clsx(buttonVariants({ variant, size, rounded }), className)} {...props} />;
}
Button.displayName = 'Button';

export { Button };
