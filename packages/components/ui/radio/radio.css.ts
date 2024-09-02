import { style } from '@vanilla-extract/css';
import { rem } from '../../utils/css';

export const radioStyle = style({
  backgroundColor: 'white',
  width: rem(25),
  height: rem(25),
  borderRadius: '100%',
  selectors: {
    [`&[data-state='checked']:hover`]: {
      backgroundColor: '#d5d5d5',
    },
    [`&[data-state='unchecked']`]: {
      backgroundColor: '#cfcfcf',
    },
    [`&[data-state='unchecked']:hover`]: {
      backgroundColor: '#9d9d9d',
    },
  },
});

export const indicatorStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '::after': {
    content: '',
    display: 'block',
    width: 11,
    height: 11,
    borderRadius: '50%',
    backgroundColor: '#5f88f3',
  },
});
