import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style } from '@vanilla-extract/css';

export const cardInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: rem(14),
});

export const cardComponentBase = style({
  borderRadius: rem(4),
  backgroundColor: globalVars.color.neutral[5],
});

export const cardTitleFallback = style([cardComponentBase, { width: '100%', height: rem(25) }]);

export const cardDescriptionFallback = style([cardComponentBase, { width: '100%', height: rem(14) }]);

export const cardMeetingLimitFallback = style([cardComponentBase, { width: rem(60), height: rem(25) }]);
