import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style, styleVariants } from '@vanilla-extract/css';

export const scheduleCard = style({
  flexShrink: 0,
  position: 'relative',
  background: globalVars.color.neutral[3],
  borderRadius: rem(4),
  padding: rem(30, 22),
  color: globalVars.color.neutral[80],
});

export const scheduleCardHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  paddingBottom: rem(20),
  gap: rem(15),
});

export const scheduleTitle = style({
  display: 'flex',
  alignItems: 'center',
  lineHeight: 0,
  marginBlock: 0,
  fontSize: rem(20),
  fontWeight: '600',
});

export const scheduleCardThumbnail = style({
  background: globalVars.color.neutral[40],
  borderRadius: '50%',
  width: rem(55),
  height: rem(55),
  position: 'relative',
});

export const scheduleCardTitle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  position: 'relative',
  textAlign: 'left',
  fontSize: rem(20),
  fontWeight: '600',
});

export const scheduleIsOnline = style({
  borderRadius: rem(16),
  padding: rem(4),
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  color: globalVars.color.neutral.white,
  ...globalVars.text.label.small.regular,
});

export const scheduleOnlineOrOffline = styleVariants({
  online: [scheduleIsOnline, { background: globalVars.color.blue[50] }],
  offline: [scheduleIsOnline, { background: globalVars.color.purple }],
});

export const heart = style({
  height: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  flex: 1,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  position: 'relative',
  gap: rem(10),
});

export const contentText = style({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'left',
  fontSize: rem(14),
  gap: rem(8),
  flex: 1,
  width: '100%',
});

export const iconContainer = style({
  width: rem(20),
  height: rem(20),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const memberIconContainer = style({
  position: 'relative',
  width: rem(100),
  height: rem(20),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const memberIcon = style({
  width: rem(20),
  height: rem(20),
  borderRadius: '50%',
  position: 'absolute',
  overflow: 'hidden',
  backgroundColor: globalVars.color.neutral.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 2,
  borderStyle: 'solid',
});

export const memberIconByRole = styleVariants({
  owner: [memberIcon, { borderColor: globalVars.color.yellow[60] }],
  manager: [memberIcon, { borderColor: globalVars.color.blue[20] }],
  common: [memberIcon, { borderColor: globalVars.color.neutral[5] }],
});

export const memberIconDepth = styleVariants({
  1: { zIndex: 6, top: rem(0), left: rem(0) },
  2: { zIndex: 5, top: rem(0), left: rem(16) },
  3: { zIndex: 4, top: rem(0), left: rem(32) },
  4: { zIndex: 3, top: rem(0), left: rem(48) },
  5: { zIndex: 2, top: rem(0), left: rem(64) },
  6: { zIndex: 1, top: rem(0), left: rem(80) },
});
