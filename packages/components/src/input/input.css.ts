import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { rem } from '../utils/css';

export const inputWrapper = style({
  position: 'relative',
});

export const inputVariants = recipe({
  base: {
    height: rem(24),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d0d0d0',
    padding: `${rem(32)} ${rem(16)}`,
    borderRadius: 10,
    caretColor: '#5f88f3',
    minWidth: '15rem',
    ':disabled': {
      backgroundColor: '#f5f5f5',
    },
    '::placeholder': {
      color: '#bbbbbb',
    },
    selectors: {
      '&:hover:not(:disabled)': {
        borderColor: '#535353',
      },
      '&:focus:not(:disabled)': {
        borderColor: '#535353',
      },
      '&:active:not(:disabled)': {
        borderColor: '#535353',
      },
    },
  },
  variants: {
    error: {
      true: {
        borderColor: '#ff3e3e',
        selectors: {
          '&:focus:not(:disabled)': {
            borderColor: '#ff3e3e',
            outline: '#ff3e3e',
          },
          '&:active:not(:disabled)': {
            borderColor: '#ff3e3e',
            outline: '#ff3e3e',
          },
        },
      },
    },
  },
});

const inputBase = inputVariants();

export const inputCtlWrapper = style({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  top: '50%',
  right: rem(20),
  transform: 'translateY(-50%)',
  gap: rem(10),
  '@media': {
    'screen and (min-width: 1025px)': {
      selectors: {
        [`${inputBase}[type='number']:hover:not(:disabled) &`]: {
          right: rem(40),
        },
        [`${inputBase}[type='number']:active:not(:disabled) &`]: {
          right: rem(40),
        },
        [`${inputBase}[type='number']:focus:not(:disabled) &`]: {
          right: rem(40),
        },
      },
    },
  },
});

export const resetXIconStyles = style({
  backgroundColor: '#d5d5d5',
  borderRadius: '50%',
  width: rem(28),
  height: rem(28),
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ctlTextMax = style({
  color: '#bbbbbb',
});

export const ctxLabelStyle = style({
  padding: rem(16),
});

export const errorTextColor = style({
  color: '#ff3e3e',
});
