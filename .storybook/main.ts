import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  async webpackFinal(config) {
    if (!config.module?.rules) {
      return config;
    }
    config.module.rules.forEach((rule) => {
      if (typeof rule === 'object' && rule?.test && /svg/.test(String(rule.test))) {
        rule.exclude = /\.svg$/i;
      }
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
};
export default config;
