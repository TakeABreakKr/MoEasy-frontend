import { keyframes } from '@vanilla-extract/css';

export const upAndDown = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(10px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
});
