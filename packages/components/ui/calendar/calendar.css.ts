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
  padding: rem(0, 8, 25),
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
        color: globalVars.color.red[50],
      },
      saturday: {
        color: globalVars.color.blue[50],
      },
    },
    current: {
      true: {
        background: globalVars.color.neutral[80],
        color: globalVars.color.neutral.white,
        borderRadius: rem(3),
      },
    },
    not: {
      true: {
        color: globalVars.color.neutral[5],
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
  padding: rem(0, 8, 10),
});

export const footerButton = style({
  flex: 1,
});

export const line = style({
  color: globalVars.color.neutral[5],
});
