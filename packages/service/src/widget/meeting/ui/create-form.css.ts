import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

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
  margin: 0,
  ...globalVars.text.headline.medium,
});

export const body = style({
  display: 'flex',
  justifyContent: 'center',
  gap: rem(78),
});

export const formWrapper = style({
  maxWidth: rem(400),
  flexGrow: 1,
  padding: '0 30px',
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const aside = style({
  width: rem(128),
  display: 'flex',
  flexDirection: 'column',
  gap: rem(35),
});

export const asideStep = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: rem(16),
  padding: 0,
  marginBlock: 0,
});

export const stepLi = style({
  display: 'flex',
  alignItems: 'center',
  gap: rem(16),
  ...globalVars.text.label.medium.regular,
});

export const stepLiSelected = style({
  ...globalVars.text.label.medium.semibold,
});

export const stepNumber = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: rem(16),
  height: rem(16),
  borderRadius: '50%',
  backgroundColor: globalVars.color.neutral[20],
  textAlign: 'center',
  color: globalVars.color.neutral.white,
  ...globalVars.text.label.small.semibold,
});

export const numberSelected = style({
  backgroundColor: globalVars.color.neutral.black,
  color: globalVars.color.neutral.white,
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
  gap: rem(8),
  alignItems: 'center',
  marginBottom: rem(8),
  ...globalVars.text.title.small,
});

export const input = style({
  width: '100%',
});

export const inputWrapper = style({
  position: 'relative',
  display: 'flex',
});

export const navigation = style({
  width: '100%',
  height: rem(60),
  position: 'fixed',
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: rem(20),
  gap: rem(20),
  left: 0,
  bottom: 0,
});

export const navButton = style({
  borderRadius: 10,
  backgroundColor: globalVars.color.neutral.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  width: rem(60),
  height: rem(36),
  border: `1px solid ${globalVars.color.neutral[80]}`,
  ...globalVars.text.label.small.semibold,
  ':disabled': {
    border: `1px solid ${globalVars.color.neutral[20]}`,
    color: globalVars.color.neutral[20],
  },
});
