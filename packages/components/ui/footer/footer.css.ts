import { rem } from '../../utils/css';
import { style } from '@vanilla-extract/css';

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  maxWidth: rem(80 * 16),
  padding: rem(60),
});

export const footerContent = style({
  display: 'flex',
  flexDirection: 'column',
});
