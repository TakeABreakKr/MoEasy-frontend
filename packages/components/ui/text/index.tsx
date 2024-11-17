import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { textRecipe } from './text.css';

export type TextProps = { asChild?: boolean } & RecipeVariants<typeof textRecipe> & ComponentPropsWithoutRef<'div'>;

const Text = forwardRef<HTMLDivElement, TextProps>(function (
  { asChild, className, body, display, headline, title, label, semibold, ...props },
  ref,
) {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      ref={ref}
      className={clsx(textRecipe({ body, display, headline, title, label, semibold }), className)}
      {...props}
    />
  );
});
Text.displayName = 'Text';

export { Text };
