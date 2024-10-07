import { rem } from '@moeasy/storybook/utils/css';

import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  margin: '0 auto',
  paddingTop: rem(95),
  backgroundColor: 'white',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const tagWrapper = style({
  width: '100%',
  height: rem(88),
  position: 'relative',
  overflowY: 'auto',
});

export const tagList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: rem(6, 3),
});

export const tagListGradient = style({
  background: 'linear-gradient(0deg, white 0%, rgba(255, 255, 255, 0) 100%)',
  position: 'absolute',
  bottom: 0,
  height: '50%',
  width: '100%',
});
