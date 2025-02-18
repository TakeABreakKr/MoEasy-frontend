import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  borderRadius: rem(70),
  backgroundColor: globalVars.color.neutral[3],
  padding: rem(24),
  flex: 1,
});

export const currentIcon = style({
  width: rem(90),
  height: rem(90),
  borderRadius: '50%',
  backgroundColor: globalVars.color.yellow[50],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: globalVars.color.neutral.white,
  gap: rem(5),
});

export const currentText = style({
  gap: rem(5),
  flex: 1,
  color: globalVars.color.neutral[95],
  fontSize: rem(24),
  fontWeight: 600,
  textAlign: 'center',
});

export const discordIcon = style({
  backgroundColor: '#747DF7',
  width: rem(90),
  height: rem(90),
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: globalVars.color.neutral.white,
});
