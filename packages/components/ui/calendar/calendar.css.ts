import { recipe } from '@vanilla-extract/recipes';

import { rem } from '../../utils/css';
import { style } from '@vanilla-extract/css';

export const calendarWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  padding: rem(25, 0),
  gap: rem(20),
  width: rem(400),
});

export const calendarHeaderWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: rem(0, 65),
  fontSize: rem(20),
  width: `100%`,
});

export const calendarContent = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  listStyle: 'none',
  paddingInlineStart: 'unset',
  padding: rem(0, 50),
});

export const calendarContentItem = recipe({
  base: {
    width: rem(40),
    height: rem(40),
    textAlign: 'center',
    fontSize: rem(15),
  },
  variants: {
    weekday: {
      holiday: {
        color: '#FF3E3E',
      },
      saturday: {
        color: '#257CFF',
      },
    },
    current: {
      true: {
        background: '#282828',
        color: 'white',
        borderRadius: rem(5),
      },
    },
    not: {
      true: {
        color: '#D0D0D0',
      },
    },
  },
});

export const footer = style({
  display: 'flex',
  width: '100%',
  gap: rem(10),
  padding: rem(0, 26),
});

export const footerButton = style({
  flex: 1,
  fontSize: rem(20),
});
