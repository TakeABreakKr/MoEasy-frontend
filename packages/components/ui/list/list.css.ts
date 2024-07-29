// styles.css.ts
import { style } from '@vanilla-extract/css';

export const popupContainer = style({
  width: '420px',
  height: '600px',
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 10,
});

export const header = style({
  padding: '16px',
  display: 'flex',
});

export const searchInput = style({
  flexGrow: 1,
  padding: '8px 12px',
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
  marginRight: '8px',
});

export const selectAll = style({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
});

export const searchButton = style({
  backgroundColor: '#4a4a4a',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '8px 16px',
  cursor: 'pointer',
});

export const userList = style({
  flexGrow: 1,
  overflowY: 'auto',
});

export const userItem = style({
  display: 'flex',
  alignItems: 'center',
  padding: '6px',
  cursor: 'pointer',
  gap: '1rem',
  width: '100%',
});

export const userInfo = style({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  padding: '0.4rem',
});

export const userAvatar = style({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  overflow: 'hidden',
  backgroundColor: '#f0f0f0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '12px',
});

export const userName = style({
  flexGrow: 1,
});

export const footer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
