import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { rem } from '@moeasy/storybook/utils/css';

import { style } from '@vanilla-extract/css';

export const template = sprinkles({ display: 'flex', flexDirection: 'column', width: '100%' });

export const header = sprinkles({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' });

export const gridMargin = style({
  marginTop: rem(48),
});
