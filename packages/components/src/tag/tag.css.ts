import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { rem } from '../utils/css';

export const tagVariant = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: rem(30),
    backgroundColor: 'white',
    gap: rem(5),
    padding: `${rem(4)} ${rem(15)}`,
    height: rem(33),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
  },
  variants: {
    variant: {
      dark: {
        backgroundColor: '#3b3b3b',
        borderColor: '#3b3b3b',
        color: 'white',
      },
      light: {
        backgroundColor: 'white',
        borderColor: '#cccccc',
      },
    },
    isDelete: {
      true: {
        paddingLeft: rem(10),
        paddingRight: rem(8),
      },
    },
  },
});

export const deleteButton = style({
  width: rem(16),
  height: rem(16),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
