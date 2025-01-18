import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { style } from '@vanilla-extract/css';

export const textareaWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});
export const textLengthWrapper = sprinkles({ display: 'flex', justifyContent: 'flex-end' });

export const transparentTextArea = style({
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  boxShadow: 'none',
  resize: 'none',
  height: 'auto',
});
