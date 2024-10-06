import React from 'react';
import type { Preview } from '@storybook/react';
import { pretendard } from '../font';

import '../utils/styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <div className={`${pretendard.className} ${pretendard.variable}`} style={pretendard.style}>
        <Story />
      </div>
    ),
  ],

  tags: ['autodocs'],
};

export default preview;
