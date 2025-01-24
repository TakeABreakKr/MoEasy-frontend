'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import dayjs from 'dayjs';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { dateRange } from '@/shared/utils/date';
import { pushSearchParams } from '@/shared/utils/search-param';

import { DirectionButton } from '@moeasy/storybook/ui/button';

import 'dayjs/locale/ko';

import { MainScheduleCard } from '../../card/schedule';
import { MainActivityDto } from '../../type';

import * as styles from '../section.css';
import * as upcomingStyles from './upcoming.css';

dayjs.locale('ko');

export function MainUpcommingSchedule({ title, data }: { title: string; data?: MainActivityDto[] }) {
  const dateArray = useMemo(() => {
    const currentDate = dayjs();
    return Array.from(dateRange(currentDate, currentDate.add(1, 'week'), 'd'));
  }, []);
  const searchParams = useSearchParams();
  const currentDate = searchParams.get('date');
  const parsedCurrentDate = dateArray.some((date) => date.format('YYYY-MM-DD') === currentDate)
    ? dayjs(currentDate)
    : dayjs();

  return (
    <section className={styles.section}>
      <h1 className={sprinkles({ width: '100%' })}>{title}</h1>
      <div className={upcomingStyles.dateContainer}>
        {dateArray.map((date, index) => (
          <button
            className={clsx(
              upcomingStyles.dateButton,
              parsedCurrentDate.isSame(date, 'date') && upcomingStyles.dateButtonActive,
            )}
            key={date.toISOString()}
            onClick={() => pushSearchParams({ date: date.format('YYYY-MM-DD'), upComingPage: null }, searchParams)}
          >
            <span>{date.date()}</span>
            {index === 0 ? `오늘(${date.format('ddd')})` : date.format('ddd')}
          </button>
        ))}
      </div>
      <div className={upcomingStyles.scheduleContainer}>
        {data?.map((schedule, index) => <MainScheduleCard schedule={schedule} key={index} />)}
      </div>
      <MainUpcomingSectionPagination date={parsedCurrentDate.format('YYYY-MM-DD')} />
    </section>
  );
}

function MainUpcomingSectionPagination({
  currentPage = 1,
  categoryLength = 0,
  date,
}: {
  currentPage?: number;
  categoryLength?: number;
  date?: string | null;
}) {
  return (
    <div className={sprinkles({ display: 'flex', gap: 'small', width: '100%', justifyContent: 'center' })}>
      <DirectionButton
        disabled={currentPage === 1}
        onClick={() => pushSearchParams({ date, upComingPage: (currentPage - 1).toString() })}
      />
      <DirectionButton
        direction="right"
        disabled={currentPage + 1 > categoryLength / 10}
        onClick={() => pushSearchParams({ date, upComingPage: (currentPage + 1).toString() })}
      />
    </div>
  );
}
