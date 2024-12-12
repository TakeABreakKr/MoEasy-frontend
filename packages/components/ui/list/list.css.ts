import { rem } from '../../utils/css';
import { globalVars } from '../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const popupContainer = style({
  width: rem(375),
  backgroundColor: 'white',
  padding: rem(20, 8, 20),
  gap: rem(20),
  borderRadius: 8,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
});

export const ctlWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: rem(6),
});

export const inputWrapper = style({
  padding: rem(0, 16),
  display: 'flex',
  gap: rem(8),
  width: '100%',
});

export const searchInput = style({
  flexGrow: 1,
  width: '100%',
});

export const delBtnWrapper = style({
  display: 'flex',
  width: '100%',
  height: rem(20),
  minHeight: rem(20),
  maxHeight: rem(20),
  overflow: 'hidden',
  gap: rem(4),
  padding: rem(0, 16),
  scrollbarGutter: 'stable',
});

export const itemList = style({
  flexGrow: 1,
  overflowY: 'auto',
  width: '100%',
  height: rem(200),
  padding: `0 ${rem(8)}`,
});

export const itemBase = style({
  display: 'flex',
  alignItems: 'center',
  padding: 2,
  cursor: 'pointer',
  gap: '1rem',
  width: '100%',
  userSelect: 'none',
  transition: 'opacity 1s ease-out',
  opacity: 1,
  borderBottom: `1px solid ${globalVars.color.neutral[20]}`,
  ':last-child': {
    borderBottom: 'none',
  },
});

export const itemFadeOut = style({
  opacity: 0,
});

export const itemInfo = style({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  padding: '0.4rem',
});

export const itemAvatar = style({
  width: 30,
  height: 30,
  borderRadius: '50%',
  overflow: 'hidden',
  backgroundColor: '#f0f0f0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: rem(12),
});

export const itemName = style({
  flexGrow: 1,
});

export const footer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
