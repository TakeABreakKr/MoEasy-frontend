import { recipe } from '@vanilla-extract/recipes';

import { rem } from '../../utils/css';
import { globalVars } from '../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const buttonVariants = recipe({
  base: {
    cursor: 'pointer',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    ...globalVars.text.label.small.semibold,
  },
  variants: {
    variant: {
      dark: {
        color: globalVars.color.neutral.white,
        backgroundColor: globalVars.color.neutral[80],
        ':hover': {
          backgroundColor: globalVars.color.neutral[95],
        },
        ':active': {
          backgroundColor: globalVars.color.neutral.black,
        },
        ':disabled': {
          color: globalVars.color.neutral[30],
          backgroundColor: globalVars.color.neutral[10],
        },
      },
      light: {
        color: globalVars.color.neutral[80],
        backgroundColor: globalVars.color.neutral.white,
        borderColor: globalVars.color.neutral[80],
        ':hover': {
          backgroundColor: globalVars.color.neutral[5],
        },
        ':active': {
          backgroundColor: globalVars.color.neutral[20],
        },
        ':disabled': {
          color: globalVars.color.neutral[20],
          borderColor: globalVars.color.neutral[20],
          backgroundColor: globalVars.color.neutral.white,
        },
      },
      text: {
        color: globalVars.color.neutral[80],
        textDecoration: 'initial',
        backgroundColor: 'inherit',
        ':hover': {
          backgroundColor: globalVars.color.neutral[5],
        },
        ':active': {
          backgroundColor: globalVars.color.neutral[20],
        },
        ':disabled': {
          color: globalVars.color.neutral[20],
          backgroundColor: 'inherit',
        },
      },
      primary: {
        color: globalVars.color.neutral.white,
        backgroundColor: globalVars.color.blue[50],
        ':hover': {
          backgroundColor: globalVars.color.blue[60],
        },
        ':active': {
          backgroundColor: globalVars.color.blue[70],
        },
        ':disabled': {
          color: globalVars.color.neutral[30],
          backgroundColor: globalVars.color.neutral[10],
          borderColor: globalVars.color.neutral[30],
        },
      },
      secondary: {
        color: globalVars.color.blue[50],
        backgroundColor: globalVars.color.neutral.white,
        borderColor: globalVars.color.blue[50],
        ':hover': {
          backgroundColor: globalVars.color.blue[5],
        },
        ':active': {
          backgroundColor: globalVars.color.blue[10],
        },
        ':disabled': {
          color: globalVars.color.neutral[20],
          backgroundColor: globalVars.color.neutral.white,
          borderColor: globalVars.color.neutral[20],
        },
      },
      ghost: {
        color: globalVars.color.blue[50],
        textDecoration: 'initial',
        backgroundColor: 'inherit',
        border: 'transparent',
        ':hover': {
          backgroundColor: globalVars.color.blue[5],
        },
        ':active': {
          backgroundColor: globalVars.color.blue[10],
        },
        ':disabled': {
          color: globalVars.color.neutral[20],
          backgroundColor: 'inherit',
        },
      },
    },
    size: {
      small: {
        padding: rem(8, 20),
      },
      medium: {
        padding: rem(8, 40),
      },
      large: {
        padding: rem(10, 40),
      },
      icon: {
        width: rem(20),
        height: rem(20),
      },
    },
    rounded: {
      small: {
        borderRadius: rem(4),
      },
      medium: {
        borderRadius: rem(10),
      },
      large: {
        borderRadius: rem(30),
      },
      full: {
        borderRadius: '50%',
      },
    },
  },
});

export const searchButtonStyle = style({
  justifyContent: 'flex-start',
  display: 'inline-flex',
  alignItems: 'center',
  minHeight: rem(40),
});

export const searchButtonPlaceHolder = style({
  color: globalVars.color.neutral[20],
});
