import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const dateContainer = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
});
export const dateButton = style({
  width: rem(90),
  height: rem(85),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: globalVars.color.neutral[20],
  borderRadius: rem(8),
});

export const dateButtonActive = style({ backgroundColor: globalVars.color.neutral[50] });

export const scheduleContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%',
  gap: rem(20),
});
