import { inputVariants } from '@moeasy/storybook/ui/input/input.css';
import { scrollStyle } from '@moeasy/storybook/ui/scroll/scroll.css';
import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const methodStepGap = style({
  gap: rem(30),
});

export const editorContainer = style([
  inputVariants.classNames.base,
  { width: '100%', height: rem(220), overflow: 'auto', padding: 'unset', position: 'relative' },
]);

export const editor = style([
  scrollStyle,
  { width: '100%', height: '100%', overflow: 'auto', padding: rem(10, 12), outline: 'none' },
]);

export const editorImageUpload = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: rem(10),
  right: rem(10),
  borderRadius: '50%',
  backgroundColor: globalVars.color.neutral[10],
  width: rem(30),
  height: rem(30),
  cursor: 'pointer',
  ':hover': {
    backgroundColor: globalVars.color.neutral[20],
  },
});
