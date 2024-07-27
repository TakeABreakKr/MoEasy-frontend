import React from 'react';
import type { Preview } from '@storybook/react';

import { Noto_Sans_KR } from 'next/font/google';

import '../src/utils/styles/global.css';

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] });
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
      <div className={`${notoSansKR.className}`}>
        <Story />
      </div>
    ),
  ],

  tags: ['autodocs'],
};

export default preview;
