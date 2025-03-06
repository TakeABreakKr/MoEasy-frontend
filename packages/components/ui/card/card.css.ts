// styles.css.ts
import { rem } from '../../utils/css';
import { globalVars } from '../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const card = style({
  width: '100%',
  maxWidth: rem(450),
  position: 'relative',
  padding: rem(0, 15), // 2.1875rem
  color: globalVars.color.neutral[70],
  backgroundColor: globalVars.color.neutral[3],
  borderRadius: rem(4), // 1rem
  display: 'flex',
  flexDirection: 'column',
  gap: rem(15),
  ...globalVars.text.label.medium.regular,
  transition: 'background-color 200ms ease-in-out',
});

export const cardHover = style({
  ':hover': {
    backgroundColor: globalVars.color.yellow[40],
  },
});

export const thumbnailWrapper = style({
  width: rem(80),
  height: rem(80),
  borderRadius: '50%',
  position: 'absolute',
  top: rem(-30),
  // background: 'linear-gradient(to bottom, #ffd953, #7fb2ff)',
  backgroundColor: globalVars.color.neutral[10],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const thumbnail = style({
  width: rem(72),
  height: rem(72),
  borderRadius: '50%',
  overflow: 'hidden',
  backgroundColor: globalVars.color.neutral[10],
});

export const triggerButton = style({
  height: rem(12),
});

export const title = style({
  ...globalVars.text.title.large,
  marginBlock: 0,
});

export const description = style({
  fontFamily: 'inherit',
  height: '4.5em', // 4.5em
  whiteSpace: 'pre-wrap',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  lineClamp: 3,
});

export const tagWrapper = style({
  display: 'flex',
  gap: `${rem(8)} ${rem(4)}`, // 0.5rem 0.25rem
  flexWrap: 'wrap',
  paddingBottom: rem(15),
  alignItems: 'center',
});

export const interact = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: rem(8), // 0.5rem
  alignItems: 'center',
  height: rem(40),
});
