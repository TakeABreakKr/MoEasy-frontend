import { rem } from '../../utils/css';
import { globalVars } from '../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const formStyle = style({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  width: 'fit-content',
  margin: 'auto',
  flex: 1,
});

export const body = style({
  display: 'flex',
  justifyContent: 'center',
  gap: rem(78),
});

export const formWrapper = style({
  width: rem(458),
  flexGrow: 1,
  padding: '0 30px',
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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
});

export const label = style({
  display: 'flex',
  gap: rem(8),
  alignItems: 'flex-start',
  marginBottom: rem(10),
  ...globalVars.text.title.small,
});

export const input = style({
  width: '100%',
});
export const navigation = style({
  width: '100%',
  height: rem(60),
  position: 'absolute',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
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
  color: 'inherit',
  width: rem(60),
  height: rem(36),
  border: `1px solid ${globalVars.color.neutral[80]}`,
  ...globalVars.text.label.small.semibold,
  ':disabled': {
    border: `1px solid ${globalVars.color.neutral[20]}`,
    color: globalVars.color.neutral[20],
  },
});

export const formUnderline = style({
  position: 'fixed',
  bottom: rem(60),
  height: 1,
  width: '100%',
});
