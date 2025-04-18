import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const thumbnailWrapper = style({
  width: '100%',
  display: 'flex',
  gap: rem(10),
});
export const thumbnail = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
export const plusIcon = style({
  width: rem(20),
  height: rem(20),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: globalVars.color.neutral.white,
  color: globalVars.color.neutral[70],
  borderRadius: rem(50),
});
export const imageUploadContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});
export const previewBox = style({
  width: rem(200),
  height: rem(200),
  borderRadius: rem(8),
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  objectFit: 'cover',
  flexShrink: 0,
});

export const rightSide = style({
  display: 'flex',
  flexDirection: 'column',
  gap: rem(8),
});

export const uploadButtonLabel = style({
  padding: rem(8, 16),
  backgroundColor: globalVars.color.neutral[70],
  color: globalVars.color.neutral.white,
  borderRadius: rem(5),
  fontSize: rem(14),
  textAlign: 'center',
  cursor: 'pointer',
  display: 'flex',
  gap: rem(10),
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  ':hover': {
    backgroundColor: globalVars.color.neutral[80],
  },
});

export const infoBox = style({
  color: globalVars.color.blue[50],
  backgroundColor: globalVars.color.blue[5],
  padding: rem(10),
  borderRadius: rem(5),
  ...globalVars.text.body.small,
});

export const uploadPlaceholder = style({
  textAlign: 'center',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});

export const uploadButton = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const uploadText = style({
  marginTop: rem(10),
});

export const cropContainer = style({
  width: '100%',
  height: '100%',
});

export const cropButtons = style({
  marginTop: rem(10),
  display: 'flex',
  justifyContent: 'space-between',
});

export const croppedImageContainer = style({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: 8,
});

export const previewImg = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
