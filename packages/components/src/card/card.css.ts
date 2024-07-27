// styles.css.ts
import { style, globalStyle } from '@vanilla-extract/css';
import { rem } from '../utils/css';

export const card = style({
  width: rem(540), // 33.75rem
  position: 'relative',
  padding: rem(35), // 2.1875rem
  backgroundColor: '#f0f0f0',
  borderRadius: rem(16), // 1rem
  marginBottom: rem(48), // 3rem
  display: 'flex',
  flexDirection: 'column',
  gap: rem(20), // 1.25rem
  transition: 'background-color 200ms ease-in-out',
  ':hover': {
    backgroundColor: '#ffe359',
  },
});

export const thumbnailWrapper = style({
  width: rem(130), // 130px
  height: rem(130), // 130px
  borderRadius: '50%',
  position: 'absolute',
  top: rem(-60), // -60px
  background: 'linear-gradient(to bottom, #ffd953, #7fb2ff)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const thumbnail = style({
  width: rem(116),
  height: rem(116),
  border: `${rem(3)} solid #ffffff`, // 3px
  borderRadius: '50%',
  overflow: 'hidden',
  backgroundColor: '#d9d9d9',
});

export const title = style({
  fontSize: rem(30), // 1.875rem
});

export const description = style({
  fontSize: rem(18), // 1.125rem
  fontFamily: 'inherit',
  height: '4.5em', // 4.5em
  whiteSpace: 'pre-wrap',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  lineClamp: 3,
});

export const memberWrapper = style({
  display: 'flex',
  gap: `${rem(8)} ${rem(4)}`, // 0.5rem 0.25rem
  flexWrap: 'wrap',
});

export const interact = style({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: rem(8), // 0.5rem
  gap: rem(8), // 0.5rem
  alignItems: 'center',
});
