import { rem } from '@moeasy/storybook/utils/css';
import { headerHeight } from '@moeasy/storybook/utils/styles/global.css';

import { globalStyle, style } from '@vanilla-extract/css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: `calc(100vh - ${headerHeight})`,
});

globalStyle(`${main} > section`, {
  display: 'flex',
  width: 'min(1280px, 100%)',
  flexWrap: 'wrap',
  padding: '4rem 0',
  margin: '0 auto',
  gap: '2rem',
});

export const vertical = style({
  flexDirection: 'column',
});

export const cardWrapper = style({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${rem(450)}, 1fr))`,
  width: '100%',
  placeItems: 'center',
  gap: rem(32),
  marginTop: rem(80),
});

export const sectionLeft = style({
  width: 'calc(100% - 300px - 2rem)',
  display: 'flex',
  flexDirection: 'column',
  gap: rem(32),
});
