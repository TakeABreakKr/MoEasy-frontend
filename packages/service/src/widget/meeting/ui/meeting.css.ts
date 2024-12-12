import { rem } from '@moeasy/storybook/utils/css';

import { style } from '@vanilla-extract/css';

export const meetingFilter = style({
  display: 'flex',
  gap: rem(40),
});

export const joinAgreeRow = style({
  height: rem(50),
  padding: rem(20),
});
