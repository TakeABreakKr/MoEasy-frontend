'use client';

import * as tagStyles from '@/shared/style/create-form/index.css';
import { sprinkles } from '@/shared/style/sprinkles/index.css';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@moeasy/storybook/ui/dropdown-menu/dropdown-menu';
import { EllipsisIcon } from '@moeasy/storybook/ui/icon';
import { Tag } from '@moeasy/storybook/ui/tag';
import { Text } from '@moeasy/storybook/ui/text';
import { emptyArray } from '@moeasy/storybook/utils/lib/noop';

import { searchKeywordAction } from '../lib';
import { useKeywordAutoSave, useRecentKeyword } from '../lib/local-storage';

const removeKeywordCallback = (newValue: string) => (keywords: string[] | null) =>
  keywords?.filter((keyword) => keyword !== newValue) ?? [];

export function SearchKeywordContainer() {
  const [recentKeywords, setRecentKeywords] = useRecentKeyword();
  const removeAllKeywords = () => setRecentKeywords(emptyArray);

  return (
    <div className={sprinkles({ gap: 'small', display: 'flex', flexDirection: 'column', width: '100%' })}>
      <div
        className={sprinkles({
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <Text title="small">최근 검색어</Text>
        <SearchControlDropDown removeAllKeywords={removeAllKeywords} />
      </div>
      <div className={tagStyles.tagWrapper}>
        <div className={tagStyles.tagList}>
          <div className={tagStyles.tagFlexWrap}>
            {recentKeywords?.map((keyword) => (
              <Tag
                key={keyword}
                variant="light"
                onClick={() => searchKeywordAction({ keyword })}
                onDeleteClick={() => setRecentKeywords(removeKeywordCallback(keyword))}
                isDelete
              >
                {keyword}
              </Tag>
            ))}
            {!Array.isArray(recentKeywords) ||
              (recentKeywords.length === 0 && (
                <span className={tagStyles.tagEmptyText}>최근 검색된 검색어가 없습니다.</span>
              ))}
          </div>
        </div>
        <div className={tagStyles.tagListGradient} />
      </div>
    </div>
  );
}

function SearchControlDropDown({ removeAllKeywords }: { removeAllKeywords: () => void }) {
  const [isAutoSave, setAutoSave] = useKeywordAutoSave();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisIcon height={4} />
      </DropdownMenuTrigger>
      <DropdownMenuContent isPortal={false} align="end">
        <DropdownMenuItem padding onClick={setAutoSave}>
          자동저장 {isAutoSave ? '끄기' : '켜기'}
        </DropdownMenuItem>
        <DropdownMenuItem padding onClick={removeAllKeywords}>
          검색어 전체 삭제
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
