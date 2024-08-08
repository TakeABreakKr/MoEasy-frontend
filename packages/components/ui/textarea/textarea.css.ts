import { style } from '@vanilla-extract/css';

export const textareaStyles = style({
  height: 'auto',
  resize: 'none',
  overflow: 'hidden',
  transition: 'border-color 0.3s ease',
  ':focus': {
    borderColor: '#007bff',
    boxShadow: '0 0 0 2px rgba(0,123,255,.25)',
  },
  '::placeholder': {
    color: '#999',
  },
});
