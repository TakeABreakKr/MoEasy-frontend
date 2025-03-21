import { style } from '@vanilla-extract/css';
import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

export const searchButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  border: `1px solid ${globalVars.color.neutral[20]}`,
  borderRadius: rem(10),
  flex: 1,
  padding: rem(10),
  cursor: 'pointer',
  ...globalVars.text.body.small,
});

export const memberList = style({
  marginTop: rem(10),
  display: 'flex',
  flexWrap: 'wrap',
  gap: rem(8),
});

export const memberItem = style({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: globalVars.color.neutral[10],
  padding: rem(6, 12),
  borderRadius: rem(8),
  gap: rem(4),
});

export const removeButton = style({
  background: 'none',
  border: 'none',
  color: globalVars.color.neutral[60],
  cursor: 'pointer',
  fontSize: rem(12),
  ':hover': {
    color: globalVars.color.red[60],
  },
});

export const modalBackdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

export const modalContent = style({
  backgroundColor: globalVars.color.neutral.white,
  padding: rem(20),
  borderRadius: rem(8),
  minWidth: rem(300),
  boxShadow: `0 4px 8px rgba(0, 0, 0, 0.1)`,
});

export const modalTitle = style({
  marginBottom: rem(15),
  fontSize: rem(18),
  fontWeight: 'bold',
  color: globalVars.color.neutral[95],
});
