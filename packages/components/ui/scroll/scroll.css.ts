import { rem } from '../../utils/css';
import { style } from '@vanilla-extract/css';

export const scrollStyle = style({
  borderRadius: 1,
  '::-webkit-scrollbar': {
    width: rem(7),
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
      backgroundColor: '#d9d9d9',
    },
  },
});
