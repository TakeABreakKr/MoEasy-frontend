import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ImageUpload } from './file-upload';

const meta = {
  title: 'Example/ImageUpload',
  component: ImageUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onImageUpload: fn() },
} satisfies Meta<typeof ImageUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
