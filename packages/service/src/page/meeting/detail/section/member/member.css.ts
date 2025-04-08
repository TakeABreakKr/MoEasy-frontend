import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style, styleVariants } from '@vanilla-extract/css';

const memberThumbnailBase = style({
  width: rem(35),
  height: rem(35),
  borderRadius: '50%',
  backgroundColor: globalVars.color.neutral[5],
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'transparent',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const memberColor = {
  MANAGER: '#A8CBFF',
  OWNER: '#FCB608',
};

export const memberThumbnailVariants = styleVariants({
  MEMBER: [memberThumbnailBase],
  MANAGER: [memberThumbnailBase, { borderColor: memberColor.MANAGER }],
  OWNER: [memberThumbnailBase, { borderColor: memberColor.OWNER }],
});

export const memberThumbnailImg = style({
  borderRadius: '50%',
  width: '100%',
  height: '100%',
});

const memberCrownBase = style({
  width: rem(14),
  height: rem(14),
  borderRadius: '50%',
  color: globalVars.color.neutral.white,
  position: 'absolute',
  right: rem(-2),
  bottom: rem(-2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const memberCrownVariants = styleVariants({
  MANAGER: [memberCrownBase, { backgroundColor: memberColor.MANAGER }],
  OWNER: [memberCrownBase, { backgroundColor: memberColor.OWNER }],
});
