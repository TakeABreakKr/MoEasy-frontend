// styles.css.ts
import { recipe } from '@vanilla-extract/recipes';

import { rem } from '../../utils/css';
import { style } from '@vanilla-extract/css';

export const popupContainer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 2,
});

export const positionForStorybook = style({
  selectors: {
    [`${popupContainer} &`]: { position: 'relative' },
  },
});

export const popup = recipe({
  base: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: rem(8),
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  variants: {
    size: {
      small: {
        width: rem(320),
        height: rem(480),
      },
      medium: {
        width: rem(420),
        height: rem(600),
      },
      alert: {
        width: rem(630),
      },
    },
  },
});

export const closeWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
});

export const title = style({
  fontSize: rem(32),
  fontWeight: 'bold',
  marginBottom: rem(16),
});

export const message = style({
  fontFamily: 'inherit',
  fontSize: rem(20),
  fontWeight: 'normal',
  textAlign: 'center',
  lineHeight: '1.5',
  marginBottom: rem(24),
});
