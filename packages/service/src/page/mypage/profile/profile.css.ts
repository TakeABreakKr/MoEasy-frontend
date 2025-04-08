import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const profileSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: rem(456),
});

export const profileWrapper = style({
  width: rem(120),
  height: rem(120),
  position: 'relative',
});

export const profileRound = style({
  width: rem(120),
  height: rem(120),
  borderRadius: '50%',
  overflow: 'hidden',
});

export const profileEdit = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: rem(28),
  height: rem(28),
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: globalVars.color.neutral.white,
  backgroundColor: globalVars.color.blue[30],
  ':hover': {
    backgroundColor: globalVars.color.blue[40],
  },
  ':active': {
    backgroundColor: globalVars.color.blue[50],
  },
});

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: rem(32),
});
