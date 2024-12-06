import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const popupCodeInput = style({
  backgroundColor: globalVars.color.neutral[5],
  padding: rem(10, 12),
  borderColor: globalVars.color.neutral[20],
  borderWidth: 1,
  borderStyle: 'solid',
  alignSelf: 'stretch',
  display: 'flex',
  justifyContent: 'flex-start',
  gap: rem(5),
  ...globalVars.text.body.small,
});

export const inviteCopy = style({
  height: rem(16),
  padding: rem(2, 5),
  background: globalVars.color.neutral.white,
  borderRadius: 3,
  border: '1px #C7C9CC solid',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  display: 'inline-flex',
  textAlign: 'center',
  color: '#C7C9CC',
  fontSize: rem(9),
  fontWeight: '400',
});

export const userFollow = style({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 4,
  alignSelf: 'stretch',
  backgroundColor: globalVars.color.neutral[10],
  padding: rem(8),
});

export const userHistoryWrapper = style({
  borderBottomStyle: 'solid',
  borderColor: globalVars.color.neutral[5],
  borderBottomWidth: rem(1),
  padding: rem(10, 0),
  display: 'flex',
  position: 'relative',
  justifyContent: 'space-between',
});

export const userhistory = style({
  color: globalVars.color.neutral[95],
  ...globalVars.text.label.medium.regular,
});

export const userhistoryDate = style({
  color: globalVars.color.neutral[20],
  ...globalVars.text.body.tiny,
});
