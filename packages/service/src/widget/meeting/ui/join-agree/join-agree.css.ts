import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { scrollStyle } from '@moeasy/storybook/ui/scroll/scroll.css';
import { rem } from '@moeasy/storybook/utils/css';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { style, styleVariants } from '@vanilla-extract/css';

export const joinAgreeRow = style({
  height: rem(50),
  padding: rem(20),
});

export const meetingWaitingList = style([
  scrollStyle,
  {
    width: '100%',
    height: 'auto',
    overflowY: 'auto',
    overscrollBehavior: 'contain',
  },
]);

export const meetingWaiting = style({
  ':hover': {
    background: '#F1F2F5',
  },
});

export const meetingNameWrapper = style({
  height: rem(40),
  width: '100%',
  padding: rem(20),
  alignItems: 'center',
  display: 'flex',
});

export const waitingUserWrapper = style({
  width: '100%',
  height: rem(60),
  padding: rem(10, 20),
  borderBottom: '1px #E9EAED solid',
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
});

export const waitingUserLeft = sprinkles({
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 'small',
  display: 'flex',
  height: '100%',
});

export const waitingUserCheck = sprinkles({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  height: '100%',
});

export const waitingUserInfo = style({
  width: rem(330),
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: 4,
  display: 'inline-flex',
});

export const waitingUserName = style({
  alignSelf: 'stretch',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  display: 'inline-flex',
  color: '#19191A',
  fontSize: 14,
});

export const waitingUserDesc = style({
  alignSelf: 'stretch',
  color: '#4B4C4D',
  fontSize: 11,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  wordBreak: 'break-all',
});

export const buttonWrapper = sprinkles({
  height: '100%',
  alignSelf: 'stretch',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  gap: 'xsmall',
  display: 'flex',
});

const button = style({
  padding: rem(2, 7),
  borderRadius: rem(4),
  border: '1px #323233 solid',
  justifyContent: 'flex-start',
  alignItems: 'center',
  display: 'flex',
  color: '#323233',
  fontSize: 11,
});

export const buttonVariant = styleVariants({
  reject: [
    button,
    {
      background: globalVars.color.neutral.white,
      color: '#323233',
    },
  ],
  admit: [
    button,
    {
      background: '#323233',
      color: globalVars.color.neutral.white,
    },
  ],
});
