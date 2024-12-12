import { recipe } from '@vanilla-extract/recipes';

import { rem } from '../../utils/css';
import { globalVars } from '../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const tagVariant = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: rem(30),
    backgroundColor: globalVars.color.neutral.white,
    gap: rem(5),
    padding: rem(2, 7),
    height: rem(20),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    textWrap: 'nowrap',
    ...globalVars.text.label.small.regular,
  },
  variants: {
    variant: {
      dark: {
        backgroundColor: globalVars.color.neutral[80],
        borderColor: globalVars.color.neutral[80],
        color: 'white',
      },
      light: {
        backgroundColor: globalVars.color.neutral.white,
        borderColor: globalVars.color.neutral[20],
        ':hover': {
          backgroundColor: globalVars.color.neutral[5],
        },
        ':active': {
          backgroundColor: globalVars.color.neutral[20],
        },
      },
      error: {
        backgroundColor: globalVars.color.red[50],
      },
    },
    isDelete: {
      true: {
        paddingLeft: rem(7),
        paddingRight: rem(4),
      },
    },
  },
});

export const deleteButton = style({
  width: rem(16),
  height: rem(16),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
