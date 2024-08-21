import { rem } from '../../utils/css';
import { style } from '@vanilla-extract/css';

export const timeInputContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: rem(10),
});

export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 0.5rem',
  gap: rem(10),
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
  width: rem(40),
  height: rem(40),
  textAlign: 'center',
  fontSize: rem(16),
  fontWeight: 'bold',
  borderRadius: rem(5),
  border: '1px solid #EDEDED',
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
