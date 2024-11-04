import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { rem } from '@moeasy/storybook/utils/css';

const space = {
  none: 0,
  xsmall: rem(4),
  small: rem(8),
  medium: rem(10),
  large: rem(16),
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    gap: space,
    flex: [1],
    // etc.
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});

// const colorProperties = defineProperties({
//   conditions: {
//     lightMode: {},
//     darkMode: { '@media': '(prefers-color-scheme: dark)' },
//   },
//   defaultCondition: 'lightMode',
//   properties: {
//     color: sprinklesColor,
//     background: sprinklesColor,
//     etc.
//   },
// });

export const sprinkles = createSprinkles(responsiveProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
