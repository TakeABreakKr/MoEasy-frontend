import { rem } from '../../../utils/css';
import { globalVars } from '../../../utils/styles/global.css';
import { style } from '@vanilla-extract/css';

export const headerH1 = style({
  margin: 0,
  ...globalVars.text.headline.medium,
});

export const aside = style({
  width: rem(128),
  display: 'flex',
  flexDirection: 'column',
  gap: rem(35),
});

export const asideStep = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: rem(16),
  padding: 0,
  marginBlock: 0,
});

export const stepLi = style({
  display: 'flex',
  alignItems: 'center',
  gap: rem(16),
  ...globalVars.text.label.medium.regular,
});

export const stepLiSelected = style({
  ...globalVars.text.label.medium.semibold,
});

export const stepNumber = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: rem(16),
  height: rem(16),
  borderRadius: '50%',
  backgroundColor: globalVars.color.neutral[20],
  textAlign: 'center',
  color: globalVars.color.neutral.white,
  ...globalVars.text.label.small.semibold,
});

export const numberSelected = style({
  backgroundColor: globalVars.color.neutral.black,
  color: globalVars.color.neutral.white,
});
