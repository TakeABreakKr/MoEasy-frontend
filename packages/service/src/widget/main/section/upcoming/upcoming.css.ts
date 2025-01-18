import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const dateContainer = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
});
export const dateButton = style({
  width: rem(100),
  height: rem(90),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: globalVars.color.neutral[5],
  borderRadius: rem(10),
  fontSize: rem(20),
  fontWeight: 600,
});

export const dateButtonActive = style({
  backgroundColor: globalVars.color.neutral[80],
  color: globalVars.color.neutral.white,
});

export const scheduleContainer = style({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${rem(300)}, 1fr))`,
  gap: rem(12),
  width: '100%',
});
