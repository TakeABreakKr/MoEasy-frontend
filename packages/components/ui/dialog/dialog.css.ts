// styles.css.ts
import { recipe } from '@vanilla-extract/recipes';

import { rem } from '../../utils/css';
import { globalVars } from '../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: rem(16),
  zIndex: 60,
});

export const container = recipe({
  base: {
    zIndex: 10,
    borderRadius: rem(8),
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
    backgroundColor: globalVars.color.neutral.white,
    gap: rem(10),
    width: rem(360),
    userSelect: 'none',
  },
  variants: {
    size: {
      small: {
        width: rem(320),
        height: rem(480),
      },
      medium: {
        width: rem(480),
        height: rem(600),
      },
      alert: {
        width: rem(360),
      },
    },
    padding: {
      small: {
        padding: rem(0, 10, 20),
      },
    },
  },
});

export const header = style({
  alignSelf: 'stretch',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: rem(35),
  position: 'relative',
});

export const popupContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: rem(8),
  alignItems: 'center',
  justifyContent: 'flex-start',
  alignSelf: 'stretch',
  position: 'relative',
  fontFamily: 'inherit',
  color: globalVars.color.neutral[95],
});

export const popupTitle = style({
  textAlign: 'center',
  ...globalVars.text.title.large,
  position: 'relative',
});

export const popupDesc = style({
  textAlign: 'center',
  ...globalVars.text.body.small,
  position: 'relative',
  alignSelf: 'stretch',
});

export const footer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  gap: rem(15),
});

export const message = style({
  fontFamily: 'inherit',
  textAlign: 'center',
  color: globalVars.color.neutral[95],
  ...globalVars.text.body.small,
});
