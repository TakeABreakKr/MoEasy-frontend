import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const banner = style({
  height: rem(300),
  backgroundColor: globalVars.color.neutral[70],
});
