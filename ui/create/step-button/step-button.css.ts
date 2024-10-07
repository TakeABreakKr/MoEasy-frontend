import { rem } from '../../../utils/css';
import { globalVars } from '../../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const navigation = style({
  width: '100%',
  height: rem(60),
  position: 'absolute',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: rem(20),
  gap: rem(20),
  left: 0,
  bottom: 0,
});

export const navButton = style({
  borderRadius: 10,
  backgroundColor: globalVars.color.neutral.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  width: rem(60),
  height: rem(36),
  border: `1px solid ${globalVars.color.neutral[80]}`,
  ...globalVars.text.label.small.semibold,
  ':disabled': {
    border: `1px solid ${globalVars.color.neutral[20]}`,
    color: globalVars.color.neutral[20],
  },
});

export const formUnderline = style({
  position: 'fixed',
  bottom: rem(60),
  height: 1,
  width: '100%',
});
