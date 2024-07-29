import { recipe } from '@vanilla-extract/recipes';
import { rem } from '../../utils/css';
import { style } from '@vanilla-extract/css';

export const checkboxVariants = recipe({
  base: {
    backgroundColor: '#257cff',
    width: rem(28),
    height: rem(28),
    borderRadius: rem(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    selectors: {
      [`&[data-state='unchecked']`]: {
        backgroundColor: '#d5d5d5',
      },
    },
  },
  variants: {
    rounded: {
      true: {
        width: rem(34),
        height: rem(34),
        borderRadius: '50%',
      },
    },
  },
});

export const checkIcon = style({
  selectors: {
    [`${checkboxVariants()}[data-state='unchecked'] &`]: {
      display: 'none',
    },
  },
});
