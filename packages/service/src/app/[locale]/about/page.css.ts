import { scrollStyle } from '@moeasy/storybook/ui/scroll/scroll.css';
import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style, styleVariants } from '@vanilla-extract/css';

export const aboutMain = style([
  scrollStyle,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: globalVars.color.neutral.white,
    backgroundColor: '#0f0f19',
    scrollSnapType: 'y mandatory',
    marginTop: 0,
    overflowY: 'scroll',
    height: `100vh`,
  },
]);

export const sectionbg = style({
  width: '100%',
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  scrollSnapAlign: 'center' /* 스크롤 위치 맞춤 */,
});

export const sectionVariant = styleVariants({
  first: [sectionbg, { background: 'radial-gradient( #142237, #0f0f19)' }],
  second: [sectionbg, { background: 'linear-gradient( #0f0f19, #142237)' }],
  third: [sectionbg, { background: 'linear-gradient( #142237, #0f0f19)' }],
});

export const section = style({
  margin: `${rem(60)} 0`,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
});

export const role = style({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const roleImage = style({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
});

export const stats = style({
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '30px',
});

export const statItem = style({
  textAlign: 'center',
});

export const news = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  marginTop: '30px',
});

export const newsItem = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const cta = style({
  textAlign: 'center',
  margin: '60px 0',
});

export const ctawrapper = style({
  display: 'flex',
  justifyContent: 'center',
  padding: rem(20),
  gap: '20px',
});

export const ctaLink = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '10px',
  flex: 1,
});

export const ctaButton = style({
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#ff6b6b',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
});
