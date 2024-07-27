import { style } from '@vanilla-extract/css';
import { rem } from '../utils/css';

export const progressContainer = style({
  position: 'relative',
  height: rem(16),
});

export const progressStyle = style({
  WebkitAppearance: 'none',
  appearance: 'none',
  height: rem(16),
  verticalAlign: 'super',
  '::-webkit-progress-bar': {
    background: '#f0f0f0',
    boxShadow: 'inset 3px 3px 10px #ccc',
  },
  '::-webkit-progress-value': {
    background: [
      '#f58400',
      'linear-gradient(to right, #ffd914, #f58400)',
      '-webkit-linear-gradient(to right, #ffd914, #f58400)',
    ],
    transition: 'width 0.3s ease',
  },
  '::-moz-progress-bar': {
    background: [
      '#f58400',
      'linear-gradient(to right, #ffd914, #f58400)',
      '-webkit-linear-gradient(to right, #ffd914, #f58400)',
    ],
    transition: 'width 0.3s ease',
  },
});

export const progressLogo = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%) rotate(-30deg)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  transition: 'left 0.3s ease',
});
