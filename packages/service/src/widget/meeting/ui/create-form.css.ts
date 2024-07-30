import { rem } from '@moeasy/storybook/utils/css';

import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  margin: '0 auto',
  padding: rem(20),
  backgroundColor: 'white',
});

export const header = style({
  marginBottom: rem(20),
});

export const headerH1 = style({
  fontSize: rem(24),
  fontWeight: 'bold',
});

export const body = style({
  display: 'flex',
});

export const formWrapper = style({
  flexGrow: 1,
  padding: '0 30px',
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const aside = style({
  width: rem(320),
  padding: rem(20),
  marginRight: rem(20),
  borderRadius: rem(20),
  backgroundColor: '#f6f6f6',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const asideStep = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: rem(16),
});

export const stepLi = style({
  display: 'flex',
  alignItems: 'center',
  gap: rem(16),
});

export const stepLiSelected = style({
  fontWeight: 600,
});

export const progress = style({
  inlineSize: '100%',
});

export const stepNumber = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: rem(24),
  height: rem(24),
  borderRadius: '50%',
  backgroundColor: '#e0e0e0',
  textAlign: 'center',
  lineHeight: rem(18),
});

export const numberSelected = style({
  backgroundColor: 'black',
  color: 'white',
});

export const formGroup = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: rem(15),
  gap: rem(20),
});

export const formGroupInvisible = style({
  display: 'none',
});

export const labelWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: 0,
  border: 'none',
  gap: rem(8),
});

export const label = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  marginBottom: rem(5),
  fontWeight: 'bold',
  fontSize: rem(28),
});

export const detail = style({
  fontSize: rem(12),
  color: '#bbbbbb',
  fontWeight: 'normal',
});

export const input = style({
  width: '100%',
});

export const inputWrapper = style({
  position: 'relative',
  display: 'flex',
});

export const navigation = style({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: rem(20),
  gap: rem(20),
});

export const navButton = style({
  borderRadius: '10px',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  padding: '0.875rem 1.75rem',
  border: '1px solid #353535',
});
