import { style } from '@vanilla-extract/css';

export const plainLink = style({
  textDecoration: 'none',
  color: 'inherit',
  ':visited': {
    textDecoration: 'none',
  },
});
