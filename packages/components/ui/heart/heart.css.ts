import { globalVars } from '../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const heartWrapper = style({
  color: globalVars.color.neutral[20],
  ':hover': {
    color: globalVars.color.neutral[30],
  },
  ':active': {
    color: globalVars.color.red[60],
  },
});

export const heartActive = style({
  color: globalVars.color.red[50],
  ':hover': {
    color: globalVars.color.red[60],
  },
  ':active': {
    color: globalVars.color.neutral[30],
  },
});
