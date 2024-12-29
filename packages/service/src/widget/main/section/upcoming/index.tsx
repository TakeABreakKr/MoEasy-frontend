'use client';

import { useMemo, useState } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { dateRange } from '@/shared/utils/date';

import 'dayjs/locale/ko';

import { MainScheduleCard } from '../../card/schedule';

import * as styles from '../section.css';
import * as upcomingStyles from './upcoming.css';

dayjs.locale('ko');

export function MainUpcommingSchedule({ title }: { title: string }) {
  const dateArray = useMemo(() => {
    const currentDate = dayjs();
    return Array.from(dateRange(currentDate, currentDate.add(1, 'week'), 'd'));
  }, []);

  const [currentDate, setCurrentDate] = useState(dayjs);

  return (
    <section className={styles.section}>
      <h1 className={sprinkles({ width: '100%' })}>{title}</h1>
      <div className={upcomingStyles.dateContainer}>
        {dateArray.map((date, index) => (
          <button
            className={clsx(
              upcomingStyles.dateButton,
              currentDate.isSame(date, 'date') && upcomingStyles.dateButtonActive,
            )}
            key={date.toISOString()}
            onClick={() => setCurrentDate(date)}
          >
            <span>{date.date()}</span>
            {index === 0 ? `오늘(${date.format('ddd')})` : date.format('ddd')}
          </button>
        ))}
      </div>
      <div className={upcomingStyles.scheduleContainer}>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <MainScheduleCard key={index} />
        ))}
      </div>
    </section>
  );
}
