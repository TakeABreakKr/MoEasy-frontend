'use client';

import { useSearchParams } from 'next/navigation';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { SearchKeywordInput } from '@/widget/search/ui/keyword';
import { SearchKeywordContainer } from '@/widget/search/ui/keyword-list';

export function SearchPage() {
  const searchParam = useSearchParams();
  const keyword = searchParam.get('keyword');
  return (
    <section>
      <div className={sprinkles({ gap: 'small', display: 'flex', flexDirection: 'column', width: '100%' })}>
        <SearchKeywordInput />
        {!keyword && <SearchKeywordContainer />}
      </div>
    </section>
  );
}
