import { CalendarDateType, createCalendar } from './create';

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
