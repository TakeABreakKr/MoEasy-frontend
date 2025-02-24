import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const triggerButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: rem(5),
  border: `1px solid ${globalVars.color.neutral[40]}`,
  borderRadius: rem(23),
  padding: rem(4.25, 10),
  fontSize: rem(13),
  color: globalVars.color.neutral[80],
  cursor: 'pointer',
  ':hover': {
    backgroundColor: globalVars.color.neutral[3],
  },
  ':active': {
    backgroundColor: globalVars.color.neutral[10],
  },
});

export const activeTrigger = style({
  border: `1px solid ${globalVars.color.blue[50]}`,
  color: globalVars.color.blue[50],
});

export const categoryContainer = style({
  width: rem(250),
  padding: rem(10, 20),
  backgroundColor: globalVars.color.neutral.white,
  borderRadius: rem(8),
});

export const categoryList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: rem(8),
});

export const categoryItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: rem(6),
  padding: rem(5, 12),
  backgroundColor: globalVars.color.neutral[3],
  color: globalVars.color.neutral[95],
  borderRadius: rem(30),
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  ':hover': {
    backgroundColor: globalVars.color.neutral[10],
  },
  ':active': {
    backgroundColor: globalVars.color.neutral[80],
    color: globalVars.color.neutral.white,
  },
});

export const categoryItemActive = style({
  backgroundColor: globalVars.color.neutral[80],
  color: globalVars.color.neutral.white,
  ':hover': {
    backgroundColor: globalVars.color.neutral[80],
  },
});

export const categoryIcon = style({
  width: rem(27),
  height: rem(27),
  borderRadius: '50%',
  backgroundColor: '#212535',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const categoryGroupContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: rem(16),
});

export const categoryGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: rem(8),
});

export const categoryGroupTitle = style({
  fontSize: rem(14),
  fontWeight: 'bold',
  color: globalVars.color.neutral[80],
});
