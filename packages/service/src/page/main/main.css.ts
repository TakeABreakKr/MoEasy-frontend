import { headerHeight } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: `calc(100vh - ${headerHeight})`,
});
