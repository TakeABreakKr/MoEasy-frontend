'use client';

import { useSearchParams } from 'next/navigation';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { onSearchValueChange } from '@/shared/utils/search-param';

import { Checkbox } from '@moeasy/storybook/ui/checkbox';
import { Text } from '@moeasy/storybook/ui/text';
import { Toggle } from '@moeasy/storybook/ui/toggle';

export function SearchFilter() {
  const searchParam = useSearchParams();
  const isCode = searchParam.get('isCode') === 'true';
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
      <span
        className={sprinkles({
          display: 'flex',
          alignItems: 'center',
          gap: 'small',
        })}
      >
        <Checkbox rounded={false} />
        <Text label="small">키워드</Text>
      </span>
      <span
        className={sprinkles({
          display: 'flex',
          alignItems: 'center',
          gap: 'small',
        })}
      >
        <Checkbox rounded={false} />
        <Text label="small">모임 이름</Text>
      </span>
      <span
        className={sprinkles({
          display: 'flex',
          alignItems: 'center',
          gap: 'small',
        })}
      >
        <Checkbox rounded={false} />
        <Text label="small">닉네임</Text>
      </span>
    </div>
  );
}
