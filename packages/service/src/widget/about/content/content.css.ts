import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style, styleVariants } from '@vanilla-extract/css';

export const sectionbg = style({
  width: '100%',
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  scrollSnapAlign: 'center' /* 스크롤 위치 맞춤 */,
  position: 'relative',
});

export const sectionVariant = styleVariants({
  first: [sectionbg, { background: 'radial-gradient( #142237, #0f0f19)' }],
  second: [sectionbg, { background: 'linear-gradient( #0f0f19, #142237)' }],
  third: [sectionbg, { background: 'linear-gradient( #142237, #0f0f19)' }],
});

export const section = style({
  margin: rem(60, 0),
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: rem(20),
  width: '100%',
});
export const role = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: rem(20),
  marginTop: rem(30),
});

export const roleItem = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const roleItemHeader = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const roleNum = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: rem(24),
  height: rem(24),
  borderRadius: '50%',
  backgroundColor: '#F9F9F9',
  color: 'initial',
});

export const cta = style({
  textAlign: 'center',
  margin: '60px 0',
});

export const ctawrapper = style({
  display: 'flex',
  justifyContent: 'center',
  padding: rem(20),
  gap: rem(20),
  width: '100%',
  maxWidth: rem(600),
  marginTop: rem(90),
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
  padding: rem(10, 20),
  backgroundColor: '#44ABCF',
  color: globalVars.color.neutral.white,
  textDecoration: 'none',
  borderRadius: rem(15),
});

export const firstFireworkPosition = style({
  position: 'absolute',
  top: '30%',
  left: '30%',
});
