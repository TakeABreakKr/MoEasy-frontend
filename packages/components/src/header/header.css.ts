// header.css.ts
import { style, globalStyle } from '@vanilla-extract/css';
import { rem } from '../../utils/css';
import { headerHeight } from '../../utils/styles/global.css';

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
});

export const headerWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: rem(1280), // 1280px
  height: headerHeight,
});

globalStyle(`${header} svg`, {
  display: 'inline-block',
  verticalAlign: 'top',
});

globalStyle(`${header} h1`, {
  fontWeight: 700,
  fontSize: rem(20), // 20px
  lineHeight: 1,
  margin: `${rem(6)} 0 ${rem(6)} ${rem(10)}`, // 6px, 10px
  display: 'inline-block',
  verticalAlign: 'top',
});

const commonSideStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: rem(16), // 1rem
  height: '100%',
  fontSize: rem(20), // 1.25rem
};

export const leftHandSide = style(commonSideStyles);

export const rightHandSide = style(commonSideStyles);

export const linkWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: rem(52), // 3.25rem
  listStyle: 'none',
  height: '100%',
});

globalStyle(`${linkWrapper} li`, {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
});

export const active = style({
  selectors: {
    [`${linkWrapper} &`]: {
      borderBottom: '1px solid white',
      borderTop: '1px solid transparent',
    },
  },
});

globalStyle(`${header} a:visited, ${header} a:link`, {
  textDecoration: 'none',
});

globalStyle(`${linkWrapper} a:hover, ${linkWrapper} a:active`, {
  fontWeight: 700,
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
  width: rem(44), // 44px
  height: rem(44), // 44px
  backgroundColor: '#d9d9d9',
  ':hover': {
    backgroundColor: 'black',
    color: 'white',
  },
});

export const userIcon = style({
  width: rem(56), // 56px
  height: rem(56), // 56px
  backgroundColor: '#d9d9d9',
  color: 'white',
  ':hover': {
    backgroundColor: '#969696',
    color: '#c1c1c1',
  },
});
