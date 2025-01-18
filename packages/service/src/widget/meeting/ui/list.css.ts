import { rem } from '@moeasy/storybook/utils/css';

import { style } from '@vanilla-extract/css';

export const teamgrid = style({
  display: 'grid',
  placeItems: 'center',
  gridTemplateColumns: `repeat(auto-fit, minmax(${rem(250)}, 1fr))`,
  width: '100%',
  gap: rem(32),
  maxWidth: rem(664),
});
