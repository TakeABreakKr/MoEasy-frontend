'use client';

import { useSearchParams } from 'next/navigation';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { createQueryString, onSearchValueChange } from '@/shared/utils/search-param';

import { Checkbox } from '@moeasy/storybook/ui/checkbox';
import { Text } from '@moeasy/storybook/ui/text';
import { Toggle } from '@moeasy/storybook/ui/toggle';

export function SearchFilter() {
  const searchParam = useSearchParams();
  const isCode = searchParam.get('isCode') === 'true';
  const filters = searchParam.getAll('filter');
  const toggleFilter = (filterKey: string) => {
    const filteredKeys = filters.includes(filterKey)
      ? filters.filter((key) => key !== filterKey)
      : [...filters, filterKey];
    const currentSearchParam = new URLSearchParams(searchParam);
    currentSearchParam.delete('filter');
    window.history.replaceState(
      null,
      '',
      `?${createQueryString(currentSearchParam)}&${filteredKeys.map((key) => `filter=${key}`).join('&')}`,
    );
  };
  return (
    <div className={sprinkles({ display: 'flex', justifyContent: 'flex-start', gap: 'small' })}>
      <span
        className={sprinkles({
          display: 'flex',
          alignItems: 'center',
          gap: 'small',
        })}
      >
        <Toggle
          checked={isCode}
          onToggleChange={(checked) => onSearchValueChange('isCode', searchParam)(checked ? 'true' : 'false')}
        />
        <Text label="small">코드</Text>
      </span>
      {!isCode && (
        <span
          className={sprinkles({
            display: 'flex',
            alignItems: 'center',
            gap: 'small',
          })}
        >
          <Checkbox
            name="filter"
            value="keyword"
            rounded={false}
            checked={filters.includes('keyword')}
            onCheckedChange={() => toggleFilter('keyword')}
          />
          <Text label="small">키워드</Text>
        </span>
      )}
      <span
        className={sprinkles({
          display: 'flex',
          alignItems: 'center',
          gap: 'small',
        })}
      >
        <Checkbox
          name="filter"
          value="meeting"
          rounded={false}
          checked={filters.includes('meeting')}
          onCheckedChange={() => toggleFilter('meeting')}
        />
        <Text label="small">모임 이름</Text>
      </span>
      <span
        className={sprinkles({
          display: 'flex',
          alignItems: 'center',
          gap: 'small',
        })}
      >
        <Checkbox
          name="filter"
          value="member"
          rounded={false}
          checked={filters.includes('member')}
          onCheckedChange={() => toggleFilter('member')}
        />
        <Text label="small">닉네임</Text>
      </span>
    </div>
  );
}
