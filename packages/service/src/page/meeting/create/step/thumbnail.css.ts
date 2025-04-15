import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const thumbnailWrapper = style({
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  gap: rem(10),
  marginTop: '12px',
});

export const thumbnail = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const thumbnailDescription = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: rem(8),
  flex: 1,
});

export const thumbnailUploadButton = style({
  width: 'fit-content',
  cursor: 'pointer',
  display: 'flex',
  padding: rem(10),
});

export const plusIcon = style({
  color: globalVars.color.neutral.white,
  width: rem(10),
  height: rem(10),
  borderRadius: '50%',
  margin: rem(0, 8), //임시
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const thumbnailDescriptionText = style({
  padding: rem(5),
  backgroundColor: globalVars.color.blue[5],
  color: globalVars.color.blue[50],
  borderRadius: rem(5),
  ...globalVars.text.body.small,
});
