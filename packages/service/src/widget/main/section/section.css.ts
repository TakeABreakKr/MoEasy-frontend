import { scrollStyle } from '@moeasy/storybook/ui/scroll/scroll.css';
import { rem } from '@moeasy/storybook/utils/css';

import { style } from '@vanilla-extract/css';

export const section = style({
  display: 'flex',
  flexWrap: 'wrap',
  padding: rem(80, 60),
  margin: '0 auto',
  gap: rem(32),
  width: '100%',
  maxWidth: rem(80 * 16),
});

export const cardContainer = style({
  position: 'relative',
  overflowX: 'auto',
  display: 'flex',
  gap: 16,
  width: '100%',
});

export const overlayNoPointer = style({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  background: 'linear-gradient(to right, transparent, transparent 80%, white 100%)',
});

export const cardWrapper = style([
  scrollStyle,
  {
    display: 'flex',
    alignItems: 'center',
    gap: rem(32),
    paddingTop: rem(80),
    overflowX: 'auto',
    overflowY: 'visible',
  },
]);
