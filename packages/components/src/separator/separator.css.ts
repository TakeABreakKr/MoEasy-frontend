import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const separatorColor = createVar();

export const separatorVariants = recipe({
  base: {
    [separatorColor]: 'black',
    backgroundColor: separatorColor,
  },
  variants: {
    direction: {
      vertical: {
        width: 1,
        minWidth: 1,
        maxWidth: 1,
        height: '100%',
      },
      horizontal: {
        height: 1,
        minHeight: 1,
        maxHeight: 1,
        width: '100%',
      },
    },
  },
});
