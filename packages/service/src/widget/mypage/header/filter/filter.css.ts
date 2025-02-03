import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const filterButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: rem(5),
  border: `1px solid ${globalVars.color.neutral[40]}`,
  borderRadius: rem(23),
  padding: rem(4.25, 10),
  fontSize: rem(13),
  ':hover': {
    backgroundColor: globalVars.color.neutral[3],
  },
  ':active': {
    backgroundColor: globalVars.color.neutral[10],
  },
});

export const filterButtonActive = style({
  border: `1px solid ${globalVars.color.blue[50]}`,
  color: globalVars.color.blue[50],
});

export const filterFontStyle = style({
  fontSize: rem(13),
  color: globalVars.color.neutral[80],
});

//#region category
export const categoryContainer = style({
  width: rem(675),
  padding: rem(10, 20),
  gap: rem(20),
});

export const filterGroupList = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: rem(25),
  listStyle: 'none',
  paddingInlineStart: 0,
  color: globalVars.color.neutral[20],
});

export const filterGroupItem = style({
  color: 'inherit',
  fontSize: rem(16),
});

export const filterGroupItemActive = style({
  color: globalVars.color.neutral[95],
  ...globalVars.text.title.medium,
});

export const filterCategoryList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: rem(8),
});

export const filterCategoryItem = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: rem(6),
  padding: rem(5, 12),
  backgroundColor: globalVars.color.neutral[3],
  color: globalVars.color.neutral[95],
  borderRadius: rem(30),
  ':hover': {
    backgroundColor: globalVars.color.neutral[10],
  },
  ':active': {
    backgroundColor: globalVars.color.neutral[80],
    color: globalVars.color.neutral.white,
  },
});

export const filterCategoryItemActive = style({
  backgroundColor: globalVars.color.neutral[80],
  color: globalVars.color.neutral.white,
  ':hover': {
    backgroundColor: globalVars.color.neutral[80],
  },
});

export const selectedCategoryList = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: rem(8),
  paddingInlineStart: 0,
  listStyle: 'none',
  minWidth: rem(34),
});

export const selectedItemBase = style({
  gap: rem(7),
  padding: rem(5, 12),
});

export const selectedCategoryItem = style([
  selectedItemBase,
  {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: globalVars.color.neutral[80],
    color: globalVars.color.neutral.white,
    borderRadius: rem(30),
  },
]);

export const filterCategoryIcon = style({
  width: rem(27),
  height: rem(27),
  borderRadius: '50%',
  backgroundColor: '#212535',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

//#endregion

export const filterRoleItem = style({
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: rem(6),
  padding: rem(5, 12),
});
