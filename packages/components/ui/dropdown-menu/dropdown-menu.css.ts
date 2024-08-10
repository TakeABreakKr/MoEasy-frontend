import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { rem } from '../../utils/css';

const dropdownBorderColor = '#e1e1e1';

// Keyframes
const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const zoomIn = keyframes({
  from: { transform: 'scale(0.95)' },
  to: { transform: 'scale(1)' },
});

const zoomOut = keyframes({
  from: { transform: 'scale(1)' },
  to: { transform: 'scale(0.95)' },
});

export const dropdownMenuContent = style({
  position: 'relative',
  zIndex: 50,
  overflow: 'hidden',
  borderRadius: '0.375rem',
  border: '1px solid',
  borderColor: dropdownBorderColor,
  backgroundColor: 'white',
  textAlign: 'left',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  selectors: {
    '&[data-state="open"]': {
      animation: `${fadeIn} 150ms ease-out, ${zoomIn} 150ms ease-out`,
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} 150ms ease-in, ${zoomOut} 150ms ease-in`,
    },
  },
});

export const dropdownMenuItem = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    cursor: 'default',
    userSelect: 'none',
    alignItems: 'center',
    borderRadius: rem(4),
    padding: rem(8, 10),
    fontSize: rem(15),
    outline: 'none',
    transition: 'all 0.2s',
    ':focus': {
      background: '#cfcfcf',
    },
    ':hover': {
      background: '#cfcfcf',
    },
  },
  variants: {
    inset: {
      true: {
        paddingLeft: rem(32),
      },
    },
    notice: {
      true: {
        color: '#FF3E3E',
      },
    },
    align: {
      left: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      right: {
        justifyContent: 'flex-end',
      },
    },
  },
});

export const dropdownMenuLabel = style({
  padding: '0.375rem 0.5rem',
  fontSize: rem(15),
  fontWeight: 600,
});

export const dropdownMenuSeparator = style({
  height: '1px',
  margin: rem(4),
  backgroundColor: dropdownBorderColor,
});

export const dropdownMenuShortcut = style({
  marginLeft: 'auto',
  fontSize: '0.75rem',
  letterSpacing: '0.05em',
  opacity: 0.6,
});
