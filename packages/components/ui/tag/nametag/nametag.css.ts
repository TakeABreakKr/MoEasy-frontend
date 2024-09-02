import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { rem } from '../../../utils/css';

export const badge = recipe({
  base: {
    borderRadius: rem(30),
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: rem(7),
    padding: rem(4, 12),
    height: rem(37),
    ':hover': {
      backgroundColor: '#c6c6c6',
    },
    ':active': {
      backgroundColor: '#9a9a9a',
    },
  },
  variants: {
    userRole: {
      admin: {
        backgroundColor: '#ffc83a',
        ':hover': {
          backgroundColor: '#e4a810',
        },
        ':active': {
          backgroundColor: '#c08e0d',
        },
      },
      manager: {
        backgroundColor: '#a7cdf9',
        ':hover': {
          backgroundColor: '#84afe3',
        },
        ':active': {
          backgroundColor: '#628fc4',
        },
      },
      limit: {
        backgroundColor: '#3b3b3b',
        color: 'white',
      },
    },
    iconContain: {
      true: {
        paddingLeft: rem(5),
      },
    },
  },
  compoundVariants: [
    {
      variants: { userRole: 'limit' },
      style: {
        ':hover': {
          backgroundColor: '#3b3b3b',
        },
        ':active': {
          backgroundColor: '#3b3b3b',
        },
      },
    },
  ],
});

export const icon = style({
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '#bbbbbb',
});
