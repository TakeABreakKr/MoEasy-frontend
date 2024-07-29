import { style } from '@vanilla-extract/css';
import { rem } from '../../utils/css';
import { magic } from '../../utils/styles/index.css';
import { recipe } from '@vanilla-extract/recipes';

export const label = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: rem(4),
    borderRadius: rem(8),
    gap: rem(8),
    fontSize: rem(18),
  },
  variants: {
    variant: {
      error: {
        color: '#ff3e3e',
      },
      success: {
        color: '#257cff',
      },
      none: {
        color: 'inherit',
      },
    },
  },
});

export const labelIcon = recipe({
  base: [
    magic,
    {
      width: rem(24),
      height: rem(24),
      borderRadius: '50%',
    },
  ],
  variants: {
    variant: {
      error: {
        backgroundColor: '#ff3e3e',
      },
      success: {
        backgroundColor: '#257cff',
      },
      none: {},
    },
  },
});
