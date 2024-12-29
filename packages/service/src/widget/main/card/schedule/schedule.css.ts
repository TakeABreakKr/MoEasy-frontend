import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const scheduleCard = style({
  flexShrink: 0,
  position: 'relative',
  background: globalVars.color.neutral[10],
  width: rem(300),
  borderRadius: rem(20),
  padding: rem(20),
});

export const scheduleCardThumbnail = style({
  background: globalVars.color.neutral[40],
  borderRadius: '50%',
  width: rem(55),
  height: rem(55),
  position: 'relative',
});

export const scheduleCardTitle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  position: 'relative',
  textAlign: 'left',
  fontSize: rem(16),
  fontWeight: '700',
});

export const scheduleIsOnline = style({
  background: globalVars.color.neutral[60],
  borderRadius: rem(16),
  padding: rem(4),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  color: globalVars.color.neutral.white,
  fontSize: rem(14),
  fontWeight: '600',
});

export const heart = style({
  height: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  flex: 1,
});
