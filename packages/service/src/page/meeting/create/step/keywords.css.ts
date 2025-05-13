import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const keywordList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: rem(3),
  marginTop: rem(6),
});

export const keywordItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: rem(4),
  padding: rem(2, 4, 2, 7),
  border: `1px solid ${globalVars.color.neutral[20]}`,
  color: globalVars.color.neutral[70],
  borderRadius: rem(20),
  ...globalVars.text.label.small.regular,
});

export const removeButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: rem(12),
  height: rem(12),
  borderRadius: rem(50),
  backgroundColor: globalVars.color.neutral[70],
  color: globalVars.color.neutral.white,
  cursor: 'pointer',
});
