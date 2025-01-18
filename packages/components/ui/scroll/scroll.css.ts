import { rem } from '../../utils/css';
import { globalVars } from '../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const scrollStyle = style({
  '::-webkit-scrollbar': {
    width: rem(7),
    height: rem(7),
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent',
  },
  '::-webkit-scrollbar-button': {
    display: 'none',
  },
  selectors: {
    '&:hover::-webkit-scrollbar-thumb': {
      backgroundColor: globalVars.color.neutral[20],
      borderRadius: 4,
    },
  },
});
