import { style, styleVariants } from '@vanilla-extract/css';
import { rem } from '../../utils/css';
import { globalVars } from '../../utils/styles/global.css';

export const radioStyle = style({
  backgroundColor: globalVars.color.neutral.white,
  width: rem(20),
  height: rem(20),
  borderRadius: '50%',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: globalVars.color.neutral[20],
});

export const radioVariants = styleVariants({
  primary: [
    radioStyle,
    {
      selectors: {
        [`&[data-state='checked']`]: {
          backgroundColor: globalVars.color.blue[50],
        },
        [`&[data-state='unchecked']:hover`]: {
          backgroundColor: `rgb(from ${globalVars.color.blue[50]} r g b / 0.2)`,
        },
      },
    },
  ],
  secondary: [
    radioStyle,
    {
      selectors: {
        [`&[data-state='checked']`]: {
          backgroundColor: globalVars.color.purple,
        },
        [`&[data-state='unchecked']:hover`]: {
          backgroundColor: `rgb(from ${globalVars.color.purple} r g b / 0.2)`,
        },
      },
    },
  ],
});

export const indicatorStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '::after': {
    content: '',
    display: 'block',
    width: rem(6),
    height: rem(6),
    borderRadius: '50%',
    backgroundColor: globalVars.color.neutral.white,
  },
});
