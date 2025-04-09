import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const limitInput = style({
  display: 'flex',
  alignItems: 'center',
  gap: rem(10),
});

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
  display: 'flex',
  alignItems: 'center',
  gap: rem(4),
  padding: rem(2, 4, 2, 7),
  border: `1px solid ${globalVars.color.neutral[20]}`,
  color: globalVars.color.neutral[70],
  borderRadius: rem(20),
  ...globalVars.text.label.small.regular,
});

export const memberNumberItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: rem(4),
  padding: rem(2, 7),
  backgroundColor: globalVars.color.neutral[80],
  color: globalVars.color.neutral.white,
  borderRadius: rem(20),
  ...globalVars.text.label.small.regular,
});

export const removeButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: rem(12),
  height: rem(12),
  borderRadius: rem(50),
  backgroundColor: globalVars.color.neutral[70],
  color: globalVars.color.neutral.white,
  cursor: 'pointer',
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

export const modalHeader = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: rem(10),
  marginBottom: rem(10),
});

export const modalTitle = style({
  margin: '0 auto',
  ...globalVars.text.label.large.semibold,
  color: globalVars.color.neutral[95],
  textAlign: 'center',
  flex: 1,
});

export const closeButton = style({
  background: 'none',
  border: 'none',
  color: globalVars.color.neutral[70],
  fontSize: rem(20),
  cursor: 'pointer',
  marginRight: rem(8),
});

export const confirmButton = style({
  backgroundColor: 'transparent',
  color: globalVars.color.neutral[95],
  padding: rem(6, 12),
  borderRadius: rem(8),
  ...globalVars.text.button.small,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'transparent',
  },
});

export const searchInputWrapper = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: rem(8),
  marginBottom: rem(12),
});

export const memberThumbnail = style({
  width: rem(40),
  height: rem(40),
  borderRadius: '50%',
});

export const memberName = style({
  marginLeft: rem(12),
  flex: 1,
  ...globalVars.text.body.medium,
});

export const checkIcon = style({
  fontSize: rem(16),
  color: globalVars.color.blue[60],
});

export const memberListVertical = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: rem(8),
  maxHeight: rem(200),
  overflowY: 'auto',
  padding: rem(0),
});

export const memberItemVertical = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: rem(8, 0),
  cursor: 'pointer',
  borderBottom: `1px solid ${globalVars.color.neutral[5]}`,
});

export const memberInfo = style({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
});

export const circleCheck = style({
  width: rem(24),
  height: rem(24),
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: rem(16),
  fontWeight: 'bold',
  color: globalVars.color.neutral[10],
  flexShrink: 0,
});

export const selected = style({
  backgroundColor: globalVars.color.blue[50],
});

export const unselected = style({
  backgroundColor: globalVars.color.neutral[30],
  color: globalVars.color.neutral.white,
});

export const centeredModal = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 100,
  padding: rem(30, 20, 0, 20),
});

export const memberListWrapper = style({
  width: '100%',
});
export const selectedMemberSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: rem(8),
  marginBottom: rem(20),
  opacity: 0,
  transition: 'opacity 0.2s ease',
  selectors: {
    '&[data-visible="true"]': {
      visibility: 'visible',
      opacity: 1,
    },
  },
});

export const selectedCount = style({
  display: 'flex',
  color: globalVars.color.neutral[70],
  ...globalVars.text.body.small,
});

export const selectedMemberList = style({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  gap: rem(20),
  color: globalVars.color.neutral[95],
  ...globalVars.text.body.small,
});

export const selectedMember = style({
  position: 'relative',
  width: rem(40),
  height: rem(40),
});

export const selectedThumbnail = style({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
});

export const removeSelectedButton = style({
  position: 'absolute',
  top: rem(-4),
  right: rem(-4),
  width: rem(16),
  height: rem(16),
  borderRadius: '50%',
  backgroundColor: globalVars.color.neutral[60],
  color: globalVars.color.neutral.white,
  border: 'none',
  fontSize: rem(12),
  fontWeight: 'bold',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
export const noResult = style({
  padding: rem(24),
  textAlign: 'center',
  borderRadius: rem(6),
  ...globalVars.text.body.medium,
});
