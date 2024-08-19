import { style } from '@vanilla-extract/css';

export const timeInputContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 0.5rem',
});

export const button = style({
  color: '#6B7280',
  ':hover': {
    color: '#374151',
  },
  ':focus': {
    outline: 'none',
  },
});

export const input = style({
  width: '4rem',
  textAlign: 'center',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  border: 'none',
  ':focus': {
    outline: 'none',
  },
  '::-webkit-outer-spin-button': {
    appearance: 'none',
    margin: 0,
  },
  '::-webkit-inner-spin-button': {
    appearance: 'none',
    margin: 0,
  },
});

export const separator = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  margin: '0 0.5rem',
});
