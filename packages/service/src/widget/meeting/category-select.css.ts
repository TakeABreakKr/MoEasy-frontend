import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const triggerButton = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  gap: rem(5),
  border: `1px solid ${globalVars.color.neutral[20]}`,
  borderRadius: '10px',
  color: globalVars.color.neutral[20],
  padding: rem(10, 12),
  ...globalVars.text.body.small,
  cursor: 'pointer',
  ':hover': {
    border: `1px solid ${globalVars.color.neutral[50]}`,
  },
  ':active': {
    backgroundColor: globalVars.color.neutral[10],
  },
});

export const categoryContainer = style({
  width: '100%',
  padding: rem(10, 12),
  backgroundColor: globalVars.color.neutral.white,
  borderRadius: rem(8),
});

export const categoryList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(6, minmax(100px, 1fr))',
  justifyContent: 'center',
});

export const categoryItem = style({
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: rem(8),
  padding: rem(8, 12),
  color: globalVars.color.neutral[95],
  borderRadius: rem(12),
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  ':hover': {
    backgroundColor: globalVars.color.neutral[10],
  },
});

export const categoryIcon = style({
  width: rem(50),
  height: rem(50),
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

  ...globalVars.text.body.small,
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

export const categoryTabs = style({
  display: 'flex',
  gap: rem(6),
  padding: rem(5, 10),
  color: globalVars.color.neutral[30],
  cursor: 'pointer',
});
export const activeCategoryTab = style({
  color: globalVars.color.neutral[95],
  backgroundColor: globalVars.color.blue[10],
  borderRadius: '30px',
});
