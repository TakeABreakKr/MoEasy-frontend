import { recipe } from '@vanilla-extract/recipes';

import { rem } from '../../utils/css';
import { style } from '@vanilla-extract/css';
import { globalVars } from '../../utils/styles/global.css';

export const calendarTrigger = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: rem(10),
  width: rem(227),
  ...globalVars.text.body.small,
});

export const calendarWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: rem(227),
});

export const calendarHeaderWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: `100%`,
  padding: rem(25, 0),
  ...globalVars.text.title.small,
});

export const calendarContent = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  listStyle: 'none',
  paddingInlineStart: 'unset',
  padding: rem(0, 8),
  marginBlock: 0,
});

export const calendarContentItem = recipe({
  base: {
    width: rem(20),
    height: rem(20),
    textAlign: 'center',
    ...globalVars.text.label.small.regular,
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

export const calendarTimeWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const footer = style({
  display: 'flex',
  width: '100%',
  gap: rem(10),
  padding: rem(30, 8, 10),
});

export const footerButton = style({
  flex: 1,
});
