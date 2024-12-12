import { recipe } from '@vanilla-extract/recipes';

import { rem } from '../../utils/css';
import { globalVars } from '../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const toggleWrapper = recipe({
  base: {
    position: 'relative',
    width: rem(25),
    height: rem(15),
    border: `1.5px solid ${globalVars.color.neutral[10]}`,
    backgroundColor: globalVars.color.blue[50],
    borderRadius: rem(20),
    cursor: 'pointer',
  },
  variants: {
    active: {
      true: {
        backgroundColor: 'purple',
      },
    },
  },
});

export const toggleButton = style({
  position: 'absolute',
  top: '50%',
  left: rem(2),
  transform: 'translateY(-50%)',
  width: rem(9),
  height: rem(9),
  borderRadius: '50%',
  backgroundColor: globalVars.color.neutral.white,
  transition: `left 0.3s ease`,
  selectors: {
    [`${toggleWrapper.classNames.variants.active.true} &`]: {
      left: `calc(100% - ${rem(11)})`,
    },
  },
});
