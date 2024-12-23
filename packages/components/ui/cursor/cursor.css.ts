import { rem } from '../../utils/css';
import { globalVars } from '../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const cursorCircle = style({
  borderRadius: '50%',
  width: rem(20),
  height: rem(20),
  backgroundColor: 'rgb(248, 200, 98)',
  position: 'fixed',
  pointerEvents: 'none',
  mixBlendMode: 'difference',
  border: '1px solid gray',
  zIndex: 1,
  cursor: 'unset',
  boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.6)', // adjust values to change box shadow
});

export const cursorTrail = style({
  position: 'fixed',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  pointerEvents: 'none',
});

export const particle = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: rem(2),
  height: rem(2),
  borderRadius: '50%',
  backgroundColor: globalVars.color.blue[40],
  transition: 'opacity 0.1s ease-out',
});
