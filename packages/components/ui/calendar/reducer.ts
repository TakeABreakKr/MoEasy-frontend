import { DateInput } from '../../type/date';
import { TimeState } from '../time/reducer';

import { CalendarDateType, createCalendar, dateParser } from './create';

export type CalendarState = {
  year: number;
  month: number;
  calendar: CalendarDateType[];
};

export type CalendarAction =
  | {
      type: 'ADD' | 'MINUS';
    }
  | {
      type: 'SET';
      payload: { year: number; month: number };
    };

export const calendarReducer = (state: CalendarState, action: CalendarAction): CalendarState => {
  switch (action.type) {
    case 'ADD': {
      const [nextYear, nextMonth] = state.month === 12 ? [state.year + 1, 1] : [state.year, state.month + 1];
      return {
        year: nextYear,
        month: nextMonth,
        calendar: createCalendar({ year: nextYear, month: nextMonth }),
      };
    }
    case 'MINUS': {
      const [prevYear, prevMonth] = state.month === 1 ? [state.year - 1, 12] : [state.year, state.month - 1];
      return {
        year: prevYear,
        month: prevMonth,
        calendar: createCalendar({ year: prevYear, month: prevMonth }),
      };
    }
    case 'SET': {
      const { year, month } = action.payload;
      return {
        year,
        month,
        calendar: createCalendar({ year, month }),
      };
    }
  }
};

export const calendarInitializer = (value?: string | number | Date | null): CalendarState => {
  const currentDate = value ? new Date(value) : new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  return {
    year,
    month,
    calendar: createCalendar({ year, month }),
  };
};

export type CalenderDateState = {
  initDate: Date;
  currentDate: Date;
};
export type CalendarDateAction =
  | {
      type: 'DATE';
      inner?: boolean;
      payload: Date;
    }
  | {
      type: 'TIME';
      inner?: boolean;
      payload: TimeState;
    }
  | {
      type: 'INNER_UPDATE' | 'INNER_RESET';
    };

export const calendarDateReducer = (
  { initDate, currentDate }: CalenderDateState,
  action: CalendarDateAction,
): CalenderDateState => {
  switch (action.type) {
    case 'DATE': {
      const newDate = new Date(action.inner ? currentDate : initDate);
      newDate.setFullYear(action.payload.getFullYear());
      newDate.setMonth(action.payload.getMonth());
      newDate.setDate(action.payload.getDate());
      return { initDate: !action.inner ? newDate : initDate, currentDate: newDate };
    }
    case 'TIME': {
      const newDate = new Date(action.inner ? currentDate : initDate);
      newDate.setHours(action.payload.hour);
      newDate.setMinutes(action.payload.minute);
      return { initDate: !action.inner ? newDate : initDate, currentDate: newDate };
    }
    case 'INNER_UPDATE': {
      return {
        initDate: currentDate,
        currentDate,
      };
    }
    case 'INNER_RESET': {
      return {
        initDate,
        currentDate: initDate,
      };
    }
  }
};
export const calendarDateInitializer = (date?: DateInput) => ({
  initDate: date ? dateParser(date) : new Date(),
  currentDate: date ? dateParser(date) : new Date(),
});
