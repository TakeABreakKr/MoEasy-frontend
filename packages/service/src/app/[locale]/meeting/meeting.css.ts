import { rem } from '@moeasy/storybook/utils/css';

import { style } from '@vanilla-extract/css';

export const category = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: rem(16),
  marginBottom: rem(16),
});

export const categoryButton = style({
  padding: rem(6, 9),
  backgroundColor: '#999',
  borderRadius: rem(16),
  display: 'flex',
  alignItems: 'center',
});

export const order = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: rem(16),
  marginBottom: rem(16),
  height: rem(32),
});

export const orderButton = style({
  ':hover': {
    fontWeight: 500,
  },
});
