import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const toNextSection = style({
  position: 'fixed',
  bottom: rem(40),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
  color: globalVars.color.neutral.white,
});
