import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Calendar, { CalendarProps } from './calendar';
import { createDateValue } from './create';

const ControlledCalender = (props: CalendarProps) => {
  const [date, setDate] = useState(() => new Date());
  return (
    <>
      <Calendar date={date} onSelect={setDate} {...props} />
      {createDateValue(date, props.hasTime)}
    </>
  );
};

const meta = {
  title: 'Common/Calendar/Controlled',
  component: ControlledCalender,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof ControlledCalender>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {},
};

export const HasTime: Story = {
  args: {
    hasTime: true,
  },
};
