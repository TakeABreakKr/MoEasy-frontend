import { rem } from '../../utils/css';
import { globalVars } from '../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const imageUploadContainer = style({
  width: rem(200),
  height: rem(200),
  border: `2px solid ${globalVars.color.neutral[20]}`,
  borderRadius: rem(8),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: globalVars.color.neutral[20],
  ...globalVars.text.label.medium.regular,
  transition: 'background-color 200ms ease-in-out, color 200ms ease-in-out, border-color 200ms ease-in-out',
  ':hover': {
    color: globalVars.color.neutral[40],
    borderColor: globalVars.color.neutral[40],
  },
  ':active': {
    color: globalVars.color.neutral[60],
    borderColor: globalVars.color.neutral[60],
  },
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

export const plusIcon = style({
  fontSize: rem(20),
  color: globalVars.color.neutral.white,
  backgroundColor: globalVars.color.neutral[20],
  width: rem(20),
  height: rem(20),
  borderRadius: '50%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'background-color 200ms ease-in-out, color 200ms ease-in-out',
  selectors: {
    [`${imageUploadContainer}:hover &`]: {
      backgroundColor: globalVars.color.neutral[40],
    },
    [`${imageUploadContainer}:active &`]: {
      backgroundColor: globalVars.color.neutral[60],
    },
  },
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

export const croppedImageContainerImg = style({
  objectFit: 'cover',
});
