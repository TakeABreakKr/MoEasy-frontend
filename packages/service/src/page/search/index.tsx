'use client';
import { useSearchParams } from 'next/navigation';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { SearchFilter } from '@/widget/search/ui/filter';
import { SearchKeywordInput } from '@/widget/search/ui/keyword';
import { SearchKeywordContainer } from '@/widget/search/ui/keyword-list';
import { SearchResultByCode, SearchResultByKeyword } from '@/widget/search/ui/template';

export function SearchPage() {
  const searchParam = useSearchParams();
  const keyword = searchParam.get('keyword') || '';
  const isCode = searchParam.get('isCode') === 'true';
  return (
    <section>
      <div className={sprinkles({ gap: 'small', display: 'flex', flexDirection: 'column', width: '100%' })}>
        <SearchKeywordInput />
        {!keyword && <SearchKeywordContainer />}
      </div>
      <SearchFilter />
      {keyword && !isCode && <SearchResultByKeyword keyword={keyword} />}
      {keyword && isCode && <SearchResultByCode keyword={keyword} />}
    </section>
  );
}
