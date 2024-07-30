import { rem } from '@moeasy/storybook/utils/css';

import { style } from '@vanilla-extract/css';

export const teamgrid = style({
  display: 'grid',
  placeItems: 'center',
  gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))',
  width: '100%',
  gap: '2rem 0',
});

export const teamgridItem = style({
  aspectRatio: 16 / 9,
});

export const teamItemImage = style({
  selectors: {
    [`${teamgridItem} &`]: {
      objectFit: 'cover',
      borderRadius: rem(16),
    },
  },
});
