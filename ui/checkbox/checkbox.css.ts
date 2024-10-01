import { recipe } from '@vanilla-extract/recipes';

import { rem } from '../../utils/css';
import { globalVars } from '../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const checkboxVariants = recipe({
  base: {
    backgroundColor: globalVars.color.blue[50],
    width: rem(20),
    height: rem(20),
    borderRadius: rem(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: globalVars.color.neutral.white,
    selectors: {
      [`&[data-state='unchecked']`]: {
        backgroundColor: globalVars.color.neutral[5],
      },
      [`&[data-state='unchecked']:hover`]: {
        backgroundColor: globalVars.color.neutral[20],
      },
    },
  },
  variants: {
    rounded: {
      true: {
        borderRadius: '50%',
      },
    },
  },
});

export const checkIcon = style({
  selectors: {
    [`${checkboxVariants.classNames.base}[data-state='unchecked'] &`]: {
      opacity: 0,
    },
    [`${checkboxVariants.classNames.base}[data-state='unchecked']:hover &`]: {
      opacity: 0.5,
    },
  },
});
