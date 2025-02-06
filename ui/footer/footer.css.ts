import { rem } from '../../utils/css';
import { style } from '@vanilla-extract/css';

export const footer = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  scrollSnapAlign: 'end' /* 스크롤 위치 맞춤 */,
});

export const footerContent = style({
  display: 'flex',
  flexDirection: 'column',
  padding: rem(60),
  width: '100%',
  maxWidth: rem(80 * 16),
});
