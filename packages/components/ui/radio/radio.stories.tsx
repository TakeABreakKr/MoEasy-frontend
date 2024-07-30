import { RadioGroup } from '@radix-ui/react-radio-group';
import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from './radio';

const meta = {
  title: 'Example/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Render) => {
      return (
        <RadioGroup
          style={{
            background: 'lightblue',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            height: 200,
          }}
        >
          <Render />
        </RadioGroup>
      );
    },
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    value: 'one',
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    value: 'one',
    checked: false,
  },
};

export const Uncontrolled: Story = {
  args: {
    value: 'one',
    defaultChecked: false,
  },
};
