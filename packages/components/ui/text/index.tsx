import { ComponentProps } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { textRecipe } from './text.css';

export type TextProps = { asChild?: boolean } & RecipeVariants<typeof textRecipe> & ComponentProps<'div'>;

function Text({ asChild, className, body, display, headline, title, label, semibold, ellipsis, ...props }: TextProps) {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={clsx(textRecipe({ body, display, headline, title, label, semibold, ellipsis }), className)}
      {...props}
    />
  );
}

export { Text };
