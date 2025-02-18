import { rem } from '@moeasy/storybook/utils/css';

import { style } from '@vanilla-extract/css';

export const sectionDefaultWidth = style({
  width: `min(${rem(1000)}, 100%)`,
});

export const tabSection = style([
  sectionDefaultWidth,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(45),
  },
]);
