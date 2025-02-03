import { Fragment } from 'react';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

import { pushSearchParams } from '@/shared/utils/search-param';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@moeasy/storybook/ui/dropdown-menu/dropdown-menu';
import { ChevronDown } from '@moeasy/storybook/ui/icon';

import * as styles from './filter.css';

const filterLatestItems = [
  { key: 'join', value: '최신 가입순' },
  { key: 'activity', value: '최신 활동순' },
  { key: 'count', value: '많은 인원순' },
];

export function MyPageFilterLatest({ active }: { active?: boolean }) {
  const searchParams = useSearchParams();
  const selected = searchParams.get('latest');
  const selectedIndex = selected ? filterLatestItems.findIndex((item) => item.key === selected) : 0;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={clsx(styles.filterButton, active && styles.filterButtonActive)}
        onPointerDown={() => {
          pushSearchParams({ filter: 'latest' }, searchParams);
        }}
      >
        {filterLatestItems[selectedIndex].value}
        <ChevronDown height={6} aria-hidden />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        style={{
          width: 'var(--radix-dropdown-menu-trigger-width)',
        }}
      >
        {filterLatestItems.map((item, index) => (
          <Fragment key={item.key}>
            {index !== 0 && <DropdownMenuSeparator />}
            <DropdownMenuItem
              padding
              align="center"
              className={styles.filterFontStyle}
              onSelect={() => pushSearchParams({ latest: item.key }, searchParams)}
            >
              {item.value}
            </DropdownMenuItem>
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
