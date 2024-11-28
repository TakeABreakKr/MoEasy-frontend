import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const popupOverlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: rem(16),
  zIndex: 60,
});

export const popupContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  position: 'relative',
  backgroundColor: globalVars.color.neutral.white,
  borderRadius: rem(10),
  padding: rem(0, 10, 20),
  gap: rem(10),
  width: rem(360),
  userSelect: 'none',
});

export const popupHeader = style({
  alignSelf: 'stretch',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: rem(35),
  position: 'relative',
});

export const popupContent = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  gap: 'medium',
  alignItems: 'center',
  justifyContent: 'flex-start',
  alignSelf: 'stretch',
  position: 'relative',
});

export const popupTitle = style({
  color: globalVars.color.neutral[95],
  textAlign: 'center',
  ...globalVars.text.title.large,
  position: 'relative',
});

export const popupDesc = style({
  color: globalVars.color.neutral[95],
  textAlign: 'center',
  ...globalVars.text.body.small,
  position: 'relative',
  alignSelf: 'stretch',
});

export const footer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  gap: rem(15),
});
