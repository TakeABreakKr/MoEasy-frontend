// styles.css.ts
import { rem } from '../../utils/css';
import { style } from '@vanilla-extract/css';

export const popupContainer = style({
  width: rem(420),
  height: rem(600),
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
});

export const inputWrapper = style({
  padding: rem(16),
  display: 'flex',
  gap: rem(8),
});

export const searchInput = style({
  flexGrow: 1,
  padding: '8px 12px',
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
  marginRight: '8px',
});

export const delBtnWrapper = style({
  display: 'flex',
  width: '100%',
  height: rem(33 + 32),
  minHeight: rem(33 + 32),
  maxHeight: rem(33 + 32),
  overflow: 'hidden',
  gap: rem(4),
  padding: rem(16),
  scrollbarGutter: 'stable',
});

export const itemList = style({
  flexGrow: 1,
  overflowY: 'auto',
  width: '100%',
  padding: `0 ${rem(8)}`,
});

export const itemBase = style({
  display: 'flex',
  alignItems: 'center',
  padding: '6px',
  cursor: 'pointer',
  gap: '1rem',
  width: '100%',
  userSelect: 'none',
  transition: 'opacity 1s ease-out',
  opacity: 1,
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
