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
  flexDirection: 'column',
  gap: rem(8),
  alignItems: 'flex-start',
  marginBottom: rem(8),
  ...globalVars.text.title.small,
});

export const input = style({
  width: '100%',
});
