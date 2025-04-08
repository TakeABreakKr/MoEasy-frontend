import { rem } from '@moeasy/storybook/utils/css';

import { sectionDefaultWidth } from '../mypage.css';
import { style } from '@vanilla-extract/css';

export const meetingList = style([
  sectionDefaultWidth,
  {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${rem(300)}, 1fr))`,
    marginTop: rem(50),
    gap: rem(75, 10),
  },
]);
