import { rem } from '@moeasy/storybook/utils/css';

import { style } from '@vanilla-extract/css';

export const content = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '1rem',
  width: '100%',
  height: rem(280),
});

export const iconDiv = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: rem(100),
  height: rem(100),
  borderRadius: '50%',
  backgroundColor: '#212535',
  overflow: 'hidden',
});

export const iconMultiply = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#38557F',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
  mixBlendMode: 'multiply',
  selectors: {
    [`${iconDiv}:hover > &`]: {
      opacity: 0.4,
    },
    [`${iconDiv}:active > &`]: {
      opacity: 0.8,
    },
  },
});
