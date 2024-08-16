export type CalendarDateType = {
  year: number;
  month: number;
  date: number;
  weekday: number;
  origin: Date;
};

export function createCalendar({
  year,
  month = 1,
  row = 6,
}: {
  year: number;
  month?: number;
  row?: number;
}): CalendarDateType[] {
  let currentDate: Date;

  if (typeof year === 'number' && typeof month === 'number') {
    if (month < 1 || month > 12) {
      throw new Error('Month must be between 1 and 12');
    }
    currentDate = new Date(year, month - 1);
  } else {
    throw new Error('Invalid arguments');
  }

  return generateCalendarForMonth(currentDate, row);
}

function generateCalendarForMonth(date: Date, row = 6): CalendarDateType[] {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const calendar = [];

  let weekday = firstDay.getDay();

  // 이전 달의 날짜를 추가
  if (weekday !== 0) {
    const prevMonthLastDay = new Date(year, month, 0);
    const prevMonthDayCount = prevMonthLastDay.getDate();

    for (let i = weekday - 1; i >= 0; i--) {
      const day = prevMonthDayCount - i;
      const prevDate = new Date(year, month - 1, day);

      calendar.push({
        year: prevDate.getFullYear(),
        month: prevDate.getMonth() + 1,
        date: prevDate.getDate(),
        weekday: (7 + weekday - i - 1) % 7,
        origin: prevDate,
      });
    }
  }

  // 현재 달의 날짜를 추가
  for (let date = firstDay.getDate(); date <= lastDay.getDate(); date++) {
    calendar.push({
      year,
      month: month + 1,
      date,
      weekday: weekday,
      origin: new Date(year, month, date),
    });
    weekday = (weekday + 1) % 7;
  }

  // 다음 달의 날짜를 추가하여 행(row) 수 맞추기
  const totalDays = 7 * row;
  let nextMonthDay = 1;
  while (calendar.length < totalDays) {
    const nextDate = new Date(year, month + 1, nextMonthDay++);
    calendar.push({
      year: nextDate.getFullYear(),
      month: nextDate.getMonth() + 1,
      date: nextDate.getDate(),
      weekday,
      origin: nextDate,
    });
    weekday = (weekday + 1) % 7;
  }

  return calendar;
}
