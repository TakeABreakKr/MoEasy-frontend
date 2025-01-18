'use client';
import { useSearchParams } from 'next/navigation';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { isIdValid } from '@/widget/meeting/utils';
import { SearchMeetingPopupCard } from '@/widget/search/ui/card/popup';
import { SearchFilter } from '@/widget/search/ui/filter';
import { SearchKeywordInput } from '@/widget/search/ui/keyword';
import { SearchKeywordContainer } from '@/widget/search/ui/keyword-list';
import { SearchResultByCode, SearchResultByKeyword } from '@/widget/search/ui/template';

export function SearchPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const isCode = searchParams.get('isCode') === 'true';
  const meetingId = searchParams.get('meetingId');
  const isMeetingIdValid = isIdValid(meetingId);
  return (
    <section>
      <div className={sprinkles({ gap: 'small', display: 'flex', flexDirection: 'column', width: '100%' })}>
        <SearchKeywordInput />
        {!keyword && <SearchKeywordContainer />}
      </div>
      <SearchFilter />
      {keyword && !isCode && <SearchResultByKeyword keyword={keyword} />}
      {keyword && isCode && <SearchResultByCode keyword={keyword} />}
      {isMeetingIdValid && <SearchMeetingPopupCard meetingId={meetingId || ''} />}
    </section>
  );
}
