'use client';

import { useState } from 'react';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { isComposingOnEnter } from '@/shared/utils/event';

import { SearchIcon } from '@moeasy/storybook/ui/icon';
import { Input } from '@moeasy/storybook/ui/input';
import { Separator } from '@moeasy/storybook/ui/separator';

import { searchKeywordAction } from '../lib';
import { useKeywordAutoSave, useRecentKeyword } from '../lib/local-storage';

const addKeywordCallback = (newValue: string) => (keywords: string[] | null) =>
  keywords ? [...keywords.filter((keyword) => keyword !== newValue), newValue] : [newValue];

export function SearchKeywordInput() {
  const [isAutoSave] = useKeywordAutoSave();
  const [_, setRecentKeywords] = useRecentKeyword();
  const [keyword, setKeyword] = useState('');

  const onSearch = (keyword: string) => {
    if (!keyword) return;
    isAutoSave && setRecentKeywords(addKeywordCallback(keyword));
    searchKeywordAction({ keyword });
    setKeyword('');
  };

  return (
    <div className={sprinkles({ display: 'flex', flexDirection: 'column' })}>
      <div className={sprinkles({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
        <Input
          plain
          className={sprinkles({
            width: '100%',
            flex: 1,
          })}
          value={keyword}
          onValueChange={setKeyword}
          placeholder="모임,일정이름/ 모임, 친구코드/ 키워드 등을 검색해보세요"
          onKeyDown={(e) => {
            isComposingOnEnter(e) && onSearch(keyword);
          }}
        />
        <button
          className={sprinkles({
            display: 'flex',
            alignItems: 'center',
          })}
          disabled={!keyword}
          onClick={() => onSearch(keyword)}
        >
          <SearchIcon />
        </button>
      </div>
      <Separator direction="horizontal" />
    </div>
  );
}
