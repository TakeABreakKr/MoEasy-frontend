import { recipe } from '@vanilla-extract/recipes';

import { rem } from '../../utils/css';
import { style } from '@vanilla-extract/css';

export const buttonVariants = recipe({
  base: {
    cursor: 'pointer',
    lineHeight: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    color: '#333',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
  variants: {
    variant: {
      dark: {
        color: 'white',
        backgroundColor: '#3b3b3b',
        ':hover': {
          backgroundColor: '#222222',
        },
        ':active': {
          backgroundColor: '#000000',
        },
      },
      light: {
        backgroundColor: '#ffffff',
        borderColor: 'black',
        ':hover': {
          backgroundColor: '#e8e8e8',
        },
        ':disabled': {
          color: '#aaaaaa',
          borderColor: '#aaaaaa',
          backgroundColor: '#e5e5e5',
        },
        ':active': {
          color: '#282828',
          borderColor: '#282828',
          backgroundColor: '#b1b1b1',
        },
      },
      primary: {
        color: '#5f88f3',
        backgroundColor: '#e1e9ff',
        borderColor: '#5f88f3',
        ':hover': {
          backgroundColor: '#bbcdff',
        },
        ':active': {
          backgroundColor: '#5f88f3',
        },
        ':disabled': {
          color: '#d0d0d0',
          borderColor: '#d0d0d0',
          backgroundColor: '#f5f5f5',
        },
      },
      ghost: {
        color: 'inherit',
        textDecoration: 'initial',
        backgroundColor: 'inherit',
        ':hover': {
          backgroundColor: '#e3e3e3',
        },
        ':active': {
          backgroundColor: '#cfcfcf',
        },
      },
    },
    size: {
      small: {
        fontSize: rem(16),
        padding: rem(8),
      },
      medium: {
        fontSize: rem(22),
        padding: `${rem(15)} ${rem(25)}`,
      },
      large: {
        fontSize: rem(24),
        padding: `${rem(15)} ${rem(60)}`,
      },
      thick: {
        width: rem(120),
        fontSize: rem(22),
        padding: `${rem(20)} ${rem(10)}`,
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
  color: '#bbbbbb',
});
