import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const sectionDefaultWidth = style({
  width: `min(${rem(1100)}, 100%)`,
  paddingLeft: rem(50),
  paddingRight: rem(50),
});

export const detailWrapper = style([
  sectionDefaultWidth,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(50),
    paddingBottom: rem(100),
  },
]);

export const tabSection = style([
  sectionDefaultWidth,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(45),
  },
]);

export const profileImage = style({
  width: rem(70),
  height: rem(70),
  borderRadius: '50%',
  backgroundColor: globalVars.color.neutral[5],
});

export const memberThumbnail = style({
  width: rem(35),
  height: rem(35),
  borderRadius: '50%',
  backgroundColor: globalVars.color.neutral[5],
});

export const activityContainer = style({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${rem(400)}, 1fr))`,
  gap: rem(12),
  width: '100%',
});

export const memberSection = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: rem(12),
});

export const memberContainer = style({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${rem(150)}, 1fr))`,
  gap: rem(26),
  width: '100%',
});

export const inputWrapper = style({
  display: 'flex',
  width: '100%',
  gap: rem(8),
  alignItems: 'center',
  color: globalVars.color.neutral[30],
  borderBottom: `1px solid ${globalVars.color.neutral[10]}`,
});

export const plainInput = style({
  width: '100%',
  height: rem(40),
  padding: rem(10, 15),
  borderRadius: rem(4),
  border: `1px solid transparent`,
  backgroundColor: 'transparent',
});
