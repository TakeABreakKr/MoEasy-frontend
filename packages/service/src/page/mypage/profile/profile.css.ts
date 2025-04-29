import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { ComplexStyleRule, style } from '@vanilla-extract/css';

export const profileSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: rem(456),
  gap: rem(24),
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

export const inputContainer = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  gap: 'small',
  width: '100%',
});

export const submit = style({
  color: globalVars.color.neutral.white,
  backgroundColor: globalVars.color.blue[40],
  padding: rem(16, 50),
  borderRadius: rem(5),
  fontSize: rem(18),
  fontWeight: 500,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: globalVars.color.blue[50],
  },
  ':active': {
    backgroundColor: globalVars.color.blue[60],
  },
});

const footerBase: ComplexStyleRule = {
  backgroundColor: globalVars.color.blue[99],
  padding: rem(16),
  width: '100%',
  borderRadius: rem(5),
  fontSize: rem(18),
  fontWeight: 500,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: globalVars.color.blue[10],
  },
  ':active': {
    backgroundColor: globalVars.color.blue[20],
  },
};

export const logout = style({
  ...footerBase,
  color: globalVars.color.red[50],
});

export const withdraw = style({
  ...footerBase,
  color: globalVars.color.neutral[40],
});
