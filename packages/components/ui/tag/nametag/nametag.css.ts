import { recipe } from '@vanilla-extract/recipes';

import { rem } from '../../../utils/css';
import { globalVars } from '../../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const badge = recipe({
  base: {
    borderRadius: rem(30),
    backgroundColor: globalVars.color.neutral.white,
    display: 'flex',
    alignItems: 'center',
    gap: rem(7),
    padding: rem(2, 8, 2),
    height: rem(20),
    color: globalVars.color.neutral[70],
    textWrap: 'nowrap',
    ':hover': {
      backgroundColor: globalVars.color.neutral[20],
    },
    ':active': {
      backgroundColor: globalVars.color.neutral[50],
    },
    ...globalVars.text.label.small.regular,
  },
  variants: {
    userRole: {
      admin: {
        backgroundColor: globalVars.color.yellow[60],
        ':hover': {
          backgroundColor: '#e4a810',
        },
        ':active': {
          backgroundColor: '#c08e0d',
        },
      },
      manager: {
        backgroundColor: globalVars.color.blue[20],
        ':hover': {
          backgroundColor: '#84afe3',
        },
        ':active': {
          backgroundColor: '#628fc4',
        },
      },
      limit: {
        backgroundColor: globalVars.color.neutral[80],
        color: 'white',
      },
    },
    iconContain: {
      true: {
        paddingLeft: rem(5),
      },
    },
  },
  compoundVariants: [
    {
      variants: { userRole: 'limit' },
      style: {
        ':hover': {
          backgroundColor: globalVars.color.neutral[95],
        },
        ':active': {
          backgroundColor: globalVars.color.neutral.black,
        },
      },
    },
  ],
});

export const icon = style({
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '#bbbbbb',
});
