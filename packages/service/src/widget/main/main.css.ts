import { rem } from '@moeasy/storybook/utils/css';
import { headerHeight } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: `calc(100vh - ${headerHeight})`,
});

export const commonCard = style({
  minWidth: rem(327),
  height: rem(171),
});
