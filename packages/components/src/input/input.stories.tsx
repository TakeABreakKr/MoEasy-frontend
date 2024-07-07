import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputMessage } from './input';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (StoryFn) => {
      const [value, setValue] = useState('');
      return <StoryFn value={value} onValueChange={setValue} />;
    },
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    defaultValue: 'id',
  },
};
export const Number: Story = {
  args: {
    type: 'number',
    min: 10,
    max: 30,
    placeholder: '숫자를 입력해주세요',
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
export const Error: Story = {
  args: {
    defaultValue: '에러',
    isError: true,
  },
};

export const MaxLength: Story = {
  args: {
    minLength: 10,
    maxLength: 30,
  },
};

export const InputWithLabel: Story = {
  args: {
    minLength: 10,
    maxLength: 30,
    children: <InputMessage errorMessage="에러일 때는 이 메시지가 떠요">평상시의 메시지입니다.</InputMessage>,
  },
};

export const InputWithLabelError: Story = {
  args: {
    defaultValue: 'id',
    minLength: 10,
    maxLength: 30,
    children: <InputMessage errorMessage="에러일 때는 이 메시지가 떠요">평상시의 메시지입니다.</InputMessage>,
  },
};
