import { rem } from '../../utils/css';
import { globalVars } from '../../utils/styles/global.css';
import { keyframes, style } from '@vanilla-extract/css';

// Keyframes for rotation animation
const rotate = keyframes({
  '0%': {
    transform: 'rotate(0)',
  },
  '25%': {
    transform: 'rotate(360deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const button = style({
  borderRadius: rem(30),
  background: globalVars.color.neutral[20],
  width: 'fit-content',
  padding: rem(9, 15),
  position: 'relative',
  paddingRight: `calc(${rem(40)} + ${rem(15)})`, // 2.5rem (40px) + 15px
  overflow: 'hidden',
  cursor: 'pointer',
  color: 'black',
  textDecoration: 'none',
  ...globalVars.text.label.small.regular,
});

export const icon = style({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  gap: rem(24), // 1.5rem (24px)
  backgroundColor: 'black',
  color: 'white',
  width: '100%',
  height: '100%',
  padding: rem(15),
  transition: '1s ease',
  clipPath: `circle(${rem(12)} at calc(100% - ${rem(24)}) 50%)`, // 1rem (16px), 1.5rem (24px)
  selectors: {
    [`${button}:hover &`]: {
      clipPath: `circle(150% at calc(100% - ${rem(24)}))`,
    },
  },
});

export const defaultIcon = style({
  selectors: {
    [`${button}:hover ${icon} &`]: {
      animationName: rotate,
      animationDuration: '1.5s',
      animationIterationCount: 'infinite',
    },
  },
});
