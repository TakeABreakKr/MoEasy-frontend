import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { upAndDown } from '../about.css';
import { keyframes, style, styleVariants } from '@vanilla-extract/css';

export const sectionbg = style({
  width: '100%',
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  scrollSnapAlign: 'center' /* 스크롤 위치 맞춤 */,
  position: 'relative',
});

export const sectionVariant = styleVariants({
  first: [
    sectionbg,
    {
      overflow: 'hidden',
      background: 'radial-gradient( #142237, #0f0f19)',
    },
  ],
  second: [sectionbg, { background: 'linear-gradient( #0f0f19, #142237)' }],
  third: [sectionbg, { background: 'linear-gradient( #142237, #0f0f19)' }],
});

export const section = style({
  margin: rem(60, 0),
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: rem(20),
  width: '100%',
});
export const role = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: rem(20),
  marginTop: rem(30),
  flexDirection: 'column',
  '@media': {
    'screen and (min-width: 1024px)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
});

export const roleItem = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  ':hover': {
    animation: `${upAndDown} 1.5s infinite ease-in-out`,
  },
});

export const roleItemVariant = styleVariants({
  first: [roleItem, { '@media': { 'screen and (min-width: 1024px)': { order: 2, marginTop: rem(40) } } }],
  second: [roleItem, { '@media': { 'screen and (min-width: 1024px)': { order: 1 } } }],
  third: [roleItem, { '@media': { 'screen and (min-width: 1024px)': { order: 3 } } }],
});

export const roleItemHeader = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: rem(10),
});

export const roleNum = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: rem(24),
  height: rem(24),
  borderRadius: '50%',
  backgroundColor: '#F9F9F9',
  color: 'initial',
});

export const cta = style({
  textAlign: 'center',
  margin: '60px 0',
});

export const ctawrapper = style({
  display: 'flex',
  justifyContent: 'center',
  padding: rem(20),
  gap: rem(20),
  width: '100%',
  maxWidth: rem(600),
  marginTop: rem(90),
});

export const ctaLink = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '10px',
  flex: 1,
});

export const ctaButton = style({
  display: 'inline-block',
  padding: rem(10, 20),
  backgroundColor: '#44ABCF',
  fontSize: rem(15),
  color: globalVars.color.neutral.white,
  textDecoration: 'none',
  borderRadius: rem(15),
  ':hover': {
    backgroundColor: '#64C6E9',
  },
  ':active': {
    backgroundColor: '#84D2EE',
  },
});

const fireworkAnimation = keyframes({
  '0%': {
    transform: 'scale(0.8)',
    opacity: 0.3,
  },
  '50%': {
    transform: 'scale(1.2)',
    opacity: 1,
  },
  '75%': {
    transform: 'scale(1.1)',
    opacity: 0.8,
  },
  '100%': {
    transform: 'scale(0.8)',
    opacity: 0.3,
  },
});

export const firstFireworkPosition = style({
  position: 'absolute',
  top: '30%',
  left: '30%',
  animation: `${fireworkAnimation} 12s infinite ease-in-out`,
  animationDelay: '0.5s',
});

export const floatingCircles = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  pointerEvents: 'none',
});

export const float = keyframes({
  '0%': {
    transform: 'translate(0, 0) scale(1)',
  },
  '33%': {
    transform: 'translate(30px, -50px) scale(1.1)',
  },
  '66%': {
    transform: 'translate(-20px, 20px) scale(0.9)',
  },
  '100%': {
    transform: 'translate(0, 0) scale(1)',
  },
});

export const circle = style({
  position: 'absolute',
  borderRadius: '50%',
  opacity: 0.15,
  animation: `${float} 20s infinite ease-in-out`,
  filter: 'blur(3px)',
  transition: 'all 0.3s ease',
  selectors: {
    '&:nth-child(even)': {
      animationDuration: '25s',
      animationDelay: '-5s',
    },
    '&:nth-child(3n)': {
      animationDuration: '28s',
      animationDelay: '-8s',
    },
    '&:nth-child(5n)': {
      animationDuration: '22s',
      animationDelay: '-12s',
    },
  },
});

export const circleVariants = styleVariants({
  blue: [circle, { background: globalVars.color.blue[50] }],
  purple: [circle, { background: globalVars.color.purple }],
  yellow: [circle, { background: globalVars.color.yellow[30] }],
});
