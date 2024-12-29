import { rem } from '@moeasy/storybook/utils/css';
import { globalVars, headerHeight } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: `calc(100vh - ${headerHeight})`,
});

export const firstSection = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: rem(32),
  alignItems: 'center',
  padding: rem(80, 60),
  textAlign: 'center',
  backgroundColor: '#1D1F2B',
  color: globalVars.color.neutral.white,
  width: '100%',
});

export const sectionLeft = style({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: rem(32),
});

export const justRound = style({
  padding: rem(8, 16),
  borderRadius: rem(20),
  border: `1px solid ${globalVars.color.neutral.white}`,
  fontSize: rem(15),
});

export const desc = style({
  textAlign: 'left',
  fontFamily: 'inherit',
  fontSize: rem(36),
  fontWeight: 600,
  lineHeight: 'normal',
});

export const moreLink = style({
  textDecoration: 'none',
  display: 'flex',
  gap: rem(8),
  color: globalVars.color.neutral.white,
  alignItems: 'center',
  fontSize: rem(20),
});

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  maxWidth: rem(80 * 16),
  padding: rem(60),
});

export const footerContent = style({
  display: 'flex',
  flexDirection: 'column',
});
