import { recipe } from '@vanilla-extract/recipes';

import { rem } from '../../utils/css';
import { globalVars } from '../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const inputWrapper = style({
  position: 'relative',
  flex: 1,
});

export const inputVariants = recipe({
  base: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: globalVars.color.neutral[20],
    padding: `${rem(10)} ${rem(12)}`,
    borderRadius: 10,
    caretColor: globalVars.color.neutral[95],
    color: globalVars.color.neutral[95],
    minWidth: rem(210),
    ...globalVars.text.body.small,
    ':disabled': {
      backgroundColor: globalVars.color.neutral[5],
    },
    '::placeholder': {
      color: globalVars.color.neutral[20],
    },
    selectors: {
      '&:hover:not(:disabled)': {
        borderColor: globalVars.color.neutral[50],
      },
      '&:focus:not(:disabled)': {
        borderColor: globalVars.color.neutral[50],
      },
      '&:active:not(:disabled)': {
        borderColor: globalVars.color.neutral[50],
      },
    },
  },
  variants: {
    error: {
      true: {
        borderColor: globalVars.color.red[50],
        selectors: {
          '&:focus:not(:disabled)': {
            borderColor: globalVars.color.red[50],
            outline: globalVars.color.red[50],
          },
          '&:active:not(:disabled)': {
            borderColor: globalVars.color.red[50],
            outline: globalVars.color.red[50],
          },
        },
      },
    },
  },
});

const inputBase = inputVariants.classNames.base;

export const inputCtlWrapper = style({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  top: '50%',
  right: rem(10),
  transform: 'translateY(-50%)',
  gap: rem(10),
  ...globalVars.text.body.tiny,
  ':disabled': {
    display: 'none',
  },
  '@media': {
    'screen and (min-width: 768px)': {
      selectors: {
        [`${inputBase}[type='number']:hover:not(:disabled) + &`]: {
          right: rem(30),
        },
        [`${inputBase}[type='number']:active:not(:disabled) + &`]: {
          right: rem(30),
        },
        [`${inputBase}[type='number']:focus:not(:disabled) + &`]: {
          right: rem(30),
        },
      },
    },
  },
});

export const resetXIconStyles = style({
  backgroundColor: globalVars.color.neutral[20],
  borderRadius: '50%',
  width: rem(24),
  height: rem(24),
  color: globalVars.color.neutral.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ctlTextMax = style({
  color: globalVars.color.neutral[20],
});

export const ctxLabelStyle = style({
  padding: rem(16),
});

export const errorTextColor = style({
  color: globalVars.color.red[50],
});
