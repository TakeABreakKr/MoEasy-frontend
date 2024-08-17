import { useReducer, useState } from 'react';

import { Button } from '../button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../dropdown-menu/dropdown-menu';
import { ChevronDown } from '../icon';

import { calendarInitializer, calendarReducer } from './reducer';

import { inputVariants } from '../input/input.css';
import * as styles from './calendar.css';

type DateUnit = 'year' | 'month' | 'day';
type DateInput = string | Date | number;

const calendarHeader = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const parseDate = (input: DateInput) => {
  if (input instanceof Date) return input;
  return new Date(input);
};

const truncateDate = (date: Date, unit: DateUnit): Date => {
  const year = date.getFullYear();
  const month = unit === 'year' ? 0 : date.getMonth();
  const day = unit === 'day' ? date.getDate() : 1;
  return new Date(year, month, day);
};
/**
 * 두 날짜를 비교하며 앞 날짜가 크면 1, 같으면 0, 작으면 -1를 반환
 */
const compareDate = (dateA: DateInput, dateB?: DateInput, unit: 'year' | 'month' | 'day' = 'day') => {
  const parsedA = parseDate(dateA);
  const parsedB = dateB ? parseDate(dateB) : new Date();

  const truncatedA = truncateDate(parsedA, unit);
  const truncatedB = truncateDate(parsedB, unit);

  const result = truncatedA.valueOf() - truncatedB.valueOf();
  if (result > 0) return 1;
  if (result < 0) return -1;
  return 0;
};

const disableWhenOutOfRange = (date: DateInput, min?: DateInput, max?: DateInput) => {
  // if date not bigger than min return true
  if (min && compareDate(date, min, 'day') !== 1) return true;
  // if date not smaller than max return true
  if (max && compareDate(date, max, 'day') !== -1) return true;
  // if not out of range return false
  return false;
};

type CalendarProps = {
  date?: DateInput;
  onSelect?: (date?: DateInput) => void;
  min?: DateInput;
  max?: DateInput;
};

const createDateValue = (date: Date) =>
  `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
    .getDate()
    .toString()
    .padStart(2, '0')}`;

const monthFormat = new Intl.DateTimeFormat('en-US', { month: 'long' });
const monthParser = (monthNumber: number): string => {
  // monthNumber가 1부터 12 사이인지 확인
  if (monthNumber < 1 || monthNumber > 12) {
    throw new Error('Month number must be between 1 and 12');
  }
  // Date 객체 생성 (임의로 1일을 설정)
  const date = new Date(2000, monthNumber - 1);

  // 월 이름을 반환
  return monthFormat.format(date);
};

export default function Calendar({ date, onSelect, min, max }: CalendarProps) {
  const [state, dispatch] = useReducer(calendarReducer, date, calendarInitializer);
  const [currentDate, setDate] = useState<Date>(() => (date ? new Date(date) : new Date()));
  const showDate = createDateValue(currentDate);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <input type="date" className={inputVariants.classNames.base} value={showDate} readOnly />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className={styles.calendarWrapper}>
          <div className={styles.calendarHeaderWrapper}>
            <Button variant="ghost" size="small" rounded="small" onClick={() => dispatch({ type: 'MINUS' })}>
              <ChevronDown transform="rotate(90)" />
            </Button>
            {monthParser(state.month)} {state.year}
            <Button variant="ghost" size="small" rounded="small" onClick={() => dispatch({ type: 'ADD' })}>
              <ChevronDown transform="rotate(270)" />
            </Button>
          </div>
          <ul className={styles.calendarContent}>
            {calendarHeader.map((header, idx) => (
              <li
                key={header}
                className={styles.calendarContentItem({
                  weekday: idx === 6 ? 'saturday' : !idx ? 'holiday' : undefined,
                })}
              >
                {header}
              </li>
            ))}
            {state.calendar.map((item) => (
              <li key={item.origin.toISOString()}>
                <button
                  className={styles.calendarContentItem({
                    not: item.month !== state.month,
                    current: compareDate(currentDate, item.origin, 'day') === 0,
                  })}
                  disabled={item.month !== state.month || disableWhenOutOfRange(item.origin, min, max)}
                  onClick={() => {
                    setDate(item.origin);
                  }}
                >
                  {item.date}
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.footer}>
            <DropdownMenuItem onSelect={() => onSelect?.(currentDate)} asChild align="center">
              <Button size="large" className={styles.footerButton}>
                확인
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild align="center">
              <Button variant="light" size="large" className={styles.footerButton}>
                취소
              </Button>
            </DropdownMenuItem>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
