import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const loginPopupSize = style({
  width: `min(${rem(448)}, 100%)`,
  height: `min(${rem(300)}, 100%)`,
});

export const discordLogin = style({
  width: rem(232),
  height: rem(50),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: rem(10),
  borderRadius: rem(45),
  fontSize: rem(17),
  fontWeight: 600,
  backgroundColor: '#747DF7',
  color: globalVars.color.neutral.white,
  ':hover': {
    backgroundColor: '#5E67E0',
  },
  ':active': {
    backgroundColor: '#404BBF',
  },
});

export const textContainer = style({
  margin: 'auto',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: rem(20),
});

export const desc = style({
  fontSize: rem(13),
  color: globalVars.color.neutral[80],
});
