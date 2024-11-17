import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const popupOverlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: rem(16),
  zIndex: 60,
});

export const popupContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  position: 'relative',
  backgroundColor: globalVars.color.neutral.white,
  borderRadius: rem(10),
  padding: rem(0, 10, 20),
  gap: rem(10),
  width: rem(360),
  userSelect: 'none',
});

export const popupHeader = style({
  alignSelf: 'stretch',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: rem(35),
  position: 'relative',
});

export const popupTitle = style({
  color: globalVars.color.neutral[95],
  textAlign: 'center',
  ...globalVars.text.title.large,
  position: 'relative',
});

export const popupDesc = style({
  color: globalVars.color.neutral[95],
  textAlign: 'center',
  ...globalVars.text.body.small,
  position: 'relative',
  alignSelf: 'stretch',
});

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
