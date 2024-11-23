import { Suspense } from 'react';

import { MeetingListFilter } from '@/widget/meeting/ui/filter';
import MeetingList from '@/widget/meeting/ui/list';

import * as mainStyle from '../main.css';

export default function TeamPage() {
  return (
    <main className={mainStyle.main}>
      <MeetingListFilter />
      <Suspense fallback={<div className="flex items-center justify-center h-screen w-full">로딩중...</div>}>
        <MeetingList />
      </Suspense>
    </main>
  );
}
