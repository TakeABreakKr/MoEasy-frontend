import { scrollStyle } from '@moeasy/storybook/ui/scroll/scroll.css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { keyframes, style } from '@vanilla-extract/css';

export const aboutMain = style([
  scrollStyle,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: globalVars.color.neutral.white,
    backgroundColor: '#0f0f19',
    scrollSnapType: 'y mandatory',
    marginTop: 0,
    overflowY: 'scroll',
    height: `100vh`,
  },
]);

export const upAndDown = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(10px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
});
