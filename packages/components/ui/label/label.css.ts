import { rem } from '../../utils/css';
import { magic } from '../../utils/styles/index.css';
import { recipe } from '@vanilla-extract/recipes';
import { globalVars } from '../../utils/styles/global.css';

export const label = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: rem(4),
    borderRadius: rem(8),
    gap: rem(3),
    ...globalVars.text.body.small,
  },
  variants: {
    variant: {
      error: {
        color: globalVars.color.red[50],
      },
      success: {
        color: globalVars.color.blue[50],
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
      width: rem(12),
      height: rem(12),
      borderRadius: '50%',
    },
  ],
  variants: {
    variant: {
      error: {
        backgroundColor: globalVars.color.red[50],
      },
      success: {
        backgroundColor: globalVars.color.blue[50],
      },
      none: {},
    },
  },
});
