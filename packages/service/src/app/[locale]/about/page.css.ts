import { rem } from '@moeasy/storybook/utils/css';

import { style } from '@vanilla-extract/css';

export const header = style({
  textAlign: 'center',
  padding: `${rem(40)} 0`,
});

export const heroImage = style({
  maxWidth: '100%',
  height: 'auto',
});

export const section = style({
  margin: `${rem(60)} 0`,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
});

export const bigImage = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const hostGuest = style({
  display: 'flex',
  justifyContent: 'center',
  gap: rem(40),
  marginTop: rem(30),
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
});

export const newsItemImage = style({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
});

export const cta = style({
  textAlign: 'center',
  margin: '60px 0',
});

export const ctaButton = style({
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#ff6b6b',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
});
