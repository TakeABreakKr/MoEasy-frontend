import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

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

export const tabList = style({
  display: 'flex',
  gap: rem(35),
  listStyle: 'none',
  paddingInlineStart: 0,
  borderBottom: `1px solid ${globalVars.color.neutral[10]}`,
});

export const tabItem = style({
  padding: rem(8, 0),
  color: globalVars.color.neutral[30],
  ...globalVars.text.headline.small,
  fontWeight: '600',
  ':hover': {
    fontWeight: '700',
  },
});

export const tabItemActive = style({
  color: globalVars.color.neutral[95],
  borderBottom: `2px solid ${globalVars.color.neutral[95]}`,
});

export const meetingList = style([
  sectionDefaultWidth,
  {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${rem(300)}, 1fr))`,
    marginTop: rem(50),
    gap: rem(75, 10),
  },
]);
