import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const firstSection = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#1D1F2B',
  width: '100%',
});

export const firstSectionContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: rem(80 * 16),
  padding: rem(80, 60),
  color: globalVars.color.neutral.white,
  '@media': {
    'screen and (min-width: 1024px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: rem(32),
    },
  },
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
