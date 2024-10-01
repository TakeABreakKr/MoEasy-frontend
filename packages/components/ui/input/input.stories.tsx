import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputProps } from './input';

const SampleInputUse = ({ value: valueProps, ...props }: InputProps<string>) => {
  const [value, setValue] = useState(valueProps);
  const [error, setError] = useState(false);
  return <Input value={value} onValueChange={setValue} isError={error} dispatchError={setError} {...props} />;
};

const meta = {
  title: 'Common/Input',
  component: SampleInputUse,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SampleInputUse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    value: 'id',
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
    value: '에러',
    isError: true,
  },
};

export const MaxLength: Story = {
  args: {
    minLength: 10,
    maxLength: 30,
  },
};
