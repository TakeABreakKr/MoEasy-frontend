// header.css.ts
import { rem } from '../../utils/css';
import { globalVars, headerHeight } from '../../utils/styles/global.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const header = style({
  borderBottom: `1px solid rgba(0, 0, 0, 0.1)`,
  padding: `0 ${rem(60)}`, // 60px
  backgroundColor: 'white',
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
  fontSize: rem(20), // 1.25rem
};

export const leftHandSide = style(commonSideStyles);

export const rightHandSide = style({ ...commonSideStyles, gap: rem(5) });

export const linkWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: rem(30),
  listStyle: 'none',
  height: '100%',
  color: globalVars.color.neutral.black,
  ...globalVars.text.label.small.regular,
});

globalStyle(`${linkWrapper} li`, {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
});

export const active = style({
  selectors: {
    [`${linkWrapper} &`]: {
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

export const icon = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  gap: rem(16), // 1rem
  transition: 'background-color 200ms ease-in-out, color 200ms ease-in-out',
});

export const searchIcon = style({
  width: rem(34), // 34px
  height: rem(34), // 34px
  color: globalVars.color.neutral[95],
  backgroundColor: globalVars.color.neutral[5],
  ':hover': {
    backgroundColor: globalVars.color.neutral[20],
  },
  ':active': {
    backgroundColor: globalVars.color.neutral[40],
  },
});

export const userIcon = style({
  width: rem(34), // 34px
  height: rem(34), // 34px
  backgroundColor: globalVars.color.neutral[5],
  color: globalVars.color.neutral.white,
  ':hover': {
    backgroundColor: globalVars.color.neutral[20],
    color: globalVars.color.neutral[3],
  },
  ':active': {
    backgroundColor: globalVars.color.neutral[40],
    color: globalVars.color.neutral[10],
  },
});
