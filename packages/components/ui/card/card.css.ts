// styles.css.ts
import { rem } from '../../utils/css';
import { style } from '@vanilla-extract/css';
import { globalVars } from '../../utils/styles/global.css';

export const card = style({
  width: '100%',
  maxWidth: rem(450),
  position: 'relative',
  padding: rem(0, 15), // 2.1875rem
  backgroundColor: '#f0f0f0',
  borderRadius: rem(4), // 1rem
  display: 'flex',
  flexDirection: 'column',
  gap: rem(15),
  ...globalVars.text.label.medium.regular,
  transition: 'background-color 200ms ease-in-out',
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
  background: 'linear-gradient(to bottom, #ffd953, #7fb2ff)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const thumbnail = style({
  width: rem(72),
  height: rem(72),
  border: `${rem(3)} solid ${globalVars.color.neutral.white}`, // 3px
  borderRadius: '50%',
  overflow: 'hidden',
  backgroundColor: globalVars.color.neutral[10],
});

export const triggerButton = style({
  height: rem(12),
});

export const title = style({
  ...globalVars.text.title.large,
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

export const memberWrapper = style({
  display: 'flex',
  gap: `${rem(8)} ${rem(4)}`, // 0.5rem 0.25rem
  flexWrap: 'wrap',
  paddingBottom: rem(15),
});

export const interact = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: rem(8), // 0.5rem
  alignItems: 'center',
  height: rem(40),
});
