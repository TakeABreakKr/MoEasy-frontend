import { rem } from '@moeasy/storybook/utils/css';

import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: rem(20),
  height: rem(80),
});

export const headerH2 = style({
  margin: 0,
});

export const mascot = style({
  display: 'flex',
  alignItems: 'center',
});

export const mascotImg = style({
  width: rem(50),
  height: rem(50),
  marginRight: rem(10),
});

export const content = style({
  display: 'flex',
  gap: rem(20),
});

export const contentItem = style({
  flex: 1,
});

export const card = style({
  backgroundColor: '#f0f0f0',
  borderRadius: rem(10),
  padding: rem(15),
  marginBottom: rem(15),
});

export const groupInfo = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: rem(10),
});

export const groupInfoImg = style({
  width: rem(60),
  height: rem(60),
  borderRadius: '50%',
  marginRight: rem(10),
});

export const members = style({
  fontSize: rem(14),
  color: '#666',
});

export const schedule = style({
  backgroundColor: 'white',
  borderRadius: '5px',
  padding: rem(10),
  marginTop: rem(10),
});

export const verticalWrapper = style({
  display: 'flex',
  gap: rem(32),
});

export const actionButton = style({
  backgroundColor: '#f0f0f0',
  border: 'none',
  borderRadius: rem(10),
  padding: `${rem(15)} ${rem(30)}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: rem(10),
  fontSize: rem(24),
  textDecoration: 'none',
  selectors: {
    [`${verticalWrapper} &`]: {
      height: rem(12 * 16),
    },
  },
});

export const actionButtonSpan = style({
  backgroundColor: '#555',
  color: 'white',
  height: rem(32),
  width: rem(32),
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
