import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Calendar, { CalendarProps } from './calendar';
import { createDateValue } from './create';

const RangeCalender = (props: CalendarProps) => {
  const [date, setDate] = useState(() => new Date());
  const [date2, setDate2] = useState(() => new Date());
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Calendar date={date} onSelect={setDate} {...props} />
      {createDateValue(date, props.hasTime)}
      <Calendar date={date2} onSelect={setDate2} min={date} {...props} />
      {createDateValue(date2, props.hasTime)}
    </div>
  );
};

const meta = {
  title: 'Common/Calendar/Range',
  component: RangeCalender,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof RangeCalender>;

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
