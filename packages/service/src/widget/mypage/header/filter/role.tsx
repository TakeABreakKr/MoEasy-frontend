import { Fragment } from 'react';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

import { pushSearchParams } from '@/shared/utils/search-param';

import { Checkbox } from '@moeasy/storybook/ui/checkbox';
import { ChevronDown } from '@moeasy/storybook/ui/icon';
import { Popover, PopoverContent, PopoverTrigger } from '@moeasy/storybook/ui/select';
import { Separator } from '@moeasy/storybook/ui/separator';

import { filterRoleItems } from './const';

import * as styles from './filter.css';

const popoverWidthStyle = {
  width: 'var(--radix-popper-anchor-width)',
};

export function MyPageFilterLole({ active }: { active?: boolean }) {
  const searchParams = useSearchParams();
  const selectedRoles = searchParams.getAll('role');

  const onOpen = () => pushSearchParams({ filter: 'role' }, searchParams);
  const onCheckedChange = (role: string) => () => {
    const newRoles = selectedRoles.includes(role)
      ? selectedRoles.filter((_role) => _role !== role)
      : [...selectedRoles, role];
    pushSearchParams({ role: newRoles }, searchParams);
  };

  return (
    <Popover>
      <PopoverTrigger className={clsx(styles.filterButton, active && styles.filterButtonActive)} onClick={onOpen}>
        모임 역할
        <ChevronDown height={6} aria-hidden />
      </PopoverTrigger>
      <PopoverContent align="end" style={popoverWidthStyle}>
        {filterRoleItems.map((item, index) => (
          <Fragment key={item.key}>
            {index !== 0 && <Separator direction="horizontal" color="#cfcfcf" />}
            <li className={clsx(styles.filterFontStyle, styles.filterRoleItem)}>
              <Checkbox
                rounded={false}
                defaultChecked={selectedRoles.includes(item.key)}
                onCheckedChange={onCheckedChange(item.key)}
              />
              {item.value}
            </li>
          </Fragment>
        ))}
      </PopoverContent>
    </Popover>
  );
}
