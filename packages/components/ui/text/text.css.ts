import { recipe } from '@vanilla-extract/recipes';

import { globalVars } from '../../utils/styles/global.css';

export const textRecipe = recipe({
  base: {
    marginBlock: 0,
  },
  variants: {
    display: globalVars.text.display,
    headline: globalVars.text.headline,
    title: globalVars.text.title,
    body: globalVars.text.body,
    label: {
      small: globalVars.text.label.small.regular,
      medium: globalVars.text.label.medium.regular,
      large: globalVars.text.label.large.regular,
    },
    semibold: {
      true: {
        fontWeight: '600',
      },
    },
    ellipsis: {
      true: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },
    },
  },
});
