// header.css.ts
import { rem } from '../../utils/css';
import { globalVars, headerHeight } from '../../utils/styles/global.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const header = style({
  borderBottom: `1px solid rgba(0, 0, 0, 0.1)`,
  padding: rem(0, 60), // 60px
  backgroundColor: globalVars.color.neutral.white,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 1,
});

export const headerWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: rem(1280), // 1280px
  height: headerHeight,
});

const commonSideStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: rem(16), // 1rem
  height: '100%',
  ...globalVars.text.label.medium.regular,
};

export const leftHandSide = style(commonSideStyles);

export const rightHandSide = style({ ...commonSideStyles, fontSize: rem(12), gap: rem(5) });

export const linkWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: rem(30),
  listStyle: 'none',
  height: '100%',
  color: globalVars.color.neutral.black,
});

export const linkText = style({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
});

export const active = style({
  selectors: {
    [`${linkWrapper} &`]: {
      ...globalVars.text.label.medium.semibold,
      borderBottom: `1px solid ${globalVars.color.neutral.white}`,
      borderTop: '1px solid transparent',
    },
  },
});

globalStyle(`${header} a:visited, ${header} a:link`, {
  textDecoration: 'none',
});

export const welcome = style({
  fontSize: rem(14), // 14px
  marginRight: rem(10), // 10px
});

export const rightButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: rem(30),
  padding: rem(8),
  transition: 'background-color 200ms ease-in-out, color 200ms ease-in-out',
  color: globalVars.color.neutral[95],
  backgroundColor: globalVars.color.neutral[5],
  ':hover': {
    backgroundColor: globalVars.color.neutral[20],
  },
  ':active': {
    color: globalVars.color.neutral.white,
    backgroundColor: globalVars.color.blue[60],
  },
});

export const rightIcon = style([
  rightButton,
  {
    borderRadius: '50%',
    width: rem(34), // 34px
    height: rem(34), // 34px
  },
]);
