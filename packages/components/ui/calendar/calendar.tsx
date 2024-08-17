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

import * as styles from './calendar.css';

type CalendarProps = {
  date?: string | Date;
  onSelect?: (date?: string | Date) => void;
  min?: string | Date;
  max?: string | Date;
};

const calendarHeader = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function Calendar({ date = new Date(), onSelect, min, max }: CalendarProps) {
  const [state, dispatch] = useReducer(calendarReducer, date, calendarInitializer);
  const [currentDate, setDate] = useState<Date>(() => new Date(date));
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{new Date(date)?.toLocaleString()}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className={styles.calendarWrapper}>
          <div className={styles.calendarHeaderWrapper}>
            <Button variant="ghost" size="small" rounded="small" onClick={() => dispatch({ type: 'MINUS' })}>
              <ChevronDown transform="rotate(90)" />
            </Button>
            {state.year} 년 {state.month} 월
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
                  className={styles.calendarContentItem({ not: item.month !== state.month })}
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
