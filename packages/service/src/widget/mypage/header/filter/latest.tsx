import { Fragment } from 'react';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

import { useScopedI18n } from '@/locales/clients';
import { pushSearchParams } from '@/shared/utils/search-param';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@moeasy/storybook/ui/dropdown-menu/dropdown-menu';
import { ChevronDown } from '@moeasy/storybook/ui/icon';

import { filterLatestItems } from './const';

import * as styles from './filter.css';

export function MyPageFilterLatest({ active }: { active?: boolean }) {
  const searchParams = useSearchParams();
  const t = useScopedI18n('mypage.filter.latest');
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
              {t(item.value)}
            </DropdownMenuItem>
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
