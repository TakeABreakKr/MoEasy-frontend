import { useCallback, useReducer } from 'react';
import clsx from 'clsx';

import { DateInput, DateUnit } from '../../type/date';
import { Button } from '../button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../dropdown-menu/dropdown-menu';
import { CalendarIcon, ChevronDown } from '../icon';
import { Separator } from '../separator';
import { TimeState } from '../time/reducer';
import { Time } from '../time/time';

import { createDateValue, dateParser } from './create';
import { calendarDateInitializer, calendarDateReducer, calendarInitializer, calendarReducer } from './reducer';

import { inputVariants } from '../input/input.css';
import * as styles from './calendar.css';

const calendarHeader = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

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
  const parsedA = dateParser(dateA);
  const parsedB = dateB ? dateParser(dateB) : new Date();

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

export type CalendarProps = {
  date?: DateInput;
  onSelect?: (date: Date) => void;
  min?: DateInput;
  max?: DateInput;
  hasTime?: boolean;
};

export default function Calendar({ date, onSelect, min, max, hasTime }: CalendarProps) {
  // only control calendar by initial date prop
  const [state, dispatch] = useReducer(calendarReducer, date, calendarInitializer);
  // contains initial date and inner controlled date
  const [innerDate, innerDispatch] = useReducer(calendarDateReducer, date, calendarDateInitializer);
  const setDate = (payload: Date, inner = true) => innerDispatch({ type: 'DATE', payload, inner });
  const setTime = useCallback((payload: TimeState, inner = true) => {
    innerDispatch({ type: 'TIME', payload, inner });
  }, []);
  /** if controlled, parse props.date. or parse state.date */
  const showDate = date ? createDateValue(date, hasTime) : createDateValue(innerDate.initDate, hasTime);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={clsx(inputVariants.classNames.base, styles.calendarTrigger)}>
        <CalendarIcon color="#282828" />
        {showDate}
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
                    current: compareDate(innerDate.currentDate, item.origin, 'day') === 0,
                  })}
                  disabled={item.month !== state.month || disableWhenOutOfRange(item.origin, min, max)}
                  onClick={() => setDate(item.origin)}
                >
                  {item.date}
                </button>
              </li>
            ))}
          </ul>
          {hasTime && (
            <>
              <Separator direction="horizontal" color="#D0D0D0" />
              <div className={styles.calendarTimeWrapper}>
                <Time value={innerDate.initDate} dispatchTime={setTime} />
              </div>
            </>
          )}
          <div className={styles.footer}>
            <DropdownMenuItem
              asChild
              align="center"
              onSelect={() => {
                onSelect?.(innerDate.currentDate);
                innerDispatch({ type: 'INNER_UPDATE' });
              }}
            >
              <Button size="large" className={styles.footerButton}>
                확인
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              align="center"
              onSelect={() => {
                innerDispatch({ type: 'INNER_RESET' });
              }}
            >
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
