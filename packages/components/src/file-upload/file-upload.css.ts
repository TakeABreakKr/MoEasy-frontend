import { rem } from '../utils/css';

import { style } from '@vanilla-extract/css';

export const imageUploadContainer = style({
  width: rem(300),
  height: rem(300),
  border: '2px dashed #ccc',
  borderRadius: rem(8),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: '#999',
  transition: 'background-color 200ms ease-in-out, color 200ms ease-in-out',
  ':hover': {
    backgroundColor: '#cecece',
    color: '#8c8c8c',
    borderColor: '#8c8c8c',
  },
  ':active': {
    backgroundColor: '#929292',
    color: '#6f6f6f',
    borderColor: '#6f6f6f',
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
  fontSize: rem(48),
  color: '#fff',
  backgroundColor: '#ccc',
  width: rem(48),
  height: rem(48),
  borderRadius: '50%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'background-color 200ms ease-in-out, color 200ms ease-in-out',
  selectors: {
    [`${imageUploadContainer}:hover &`]: {
      backgroundColor: '#8c8c8c',
    },
    [`${imageUploadContainer}:active &`]: {
      backgroundColor: '#6f6f6f',
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
