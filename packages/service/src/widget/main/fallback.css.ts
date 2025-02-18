import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const sectionHeaderFallaback = style({
  width: rem(230),
  height: rem(35),
  backgroundColor: globalVars.color.neutral[5],
  borderRadius: rem(4),
});
