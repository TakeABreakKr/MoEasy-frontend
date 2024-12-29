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

export const cardContainer = style({ overflowX: 'auto', display: 'flex', gap: 16 });

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
