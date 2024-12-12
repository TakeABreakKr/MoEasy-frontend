import { rem } from '../../utils/css';
import { style } from '@vanilla-extract/css';
import { globalVars } from '../../utils/styles/global.css';

export const timeInputContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: rem(10),
  padding: rem(15, 0),
});

export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: rem(0, 8),
  gap: rem(3),
});

export const button = style({
  color: globalVars.color.neutral[95],
  ':hover': {
    color: globalVars.color.neutral.black,
  },
  ':focus': {
    outline: 'none',
  },
});

export const input = style({
  width: rem(35),
  height: rem(35),
  textAlign: 'center',
  borderRadius: rem(5),
  ...globalVars.text.label.medium.semibold,
  border: `1px solid ${globalVars.color.neutral[20]}`,
  ':focus': {
    outline: 'none',
  },
  '::-webkit-outer-spin-button': {
    appearance: 'none',
    margin: 0,
  },
  '::-webkit-inner-spin-button': {
    appearance: 'none',
    margin: 0,
  },
});
