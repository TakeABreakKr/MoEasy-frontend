import { Suspense } from 'react';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import MeetingList from '@/widget/meeting/ui/team-list';

import { Checkbox } from '@moeasy/storybook/ui/checkbox';

import * as mainStyle from '../main.css';
import * as pageStyle from './meeting.css';

export default function TeamPage() {
  return (
    <main className={mainStyle.main}>
      <section className={mainStyle.vertical}>
        <h1>모임 관리</h1>

        <div className={pageStyle.meetingFilter}>
          <div className={sprinkles({ display: 'flex', gap: 'medium' })}>
            <label className={sprinkles({ display: 'flex', gap: 'xsmall' })}>
              <Checkbox />
              최신등록순
            </label>
            <label className={sprinkles({ display: 'flex', gap: 'xsmall' })}>
              <Checkbox />
              이름순
            </label>
          </div>
          <div className={sprinkles({ display: 'flex', gap: 'medium' })}>
            <label className={sprinkles({ display: 'flex', gap: 'xsmall' })}>
              <Checkbox rounded={false} />
              모임장
            </label>
            <label className={sprinkles({ display: 'flex', gap: 'xsmall' })}>
              <Checkbox rounded={false} />
              매니저
            </label>
            <label className={sprinkles({ display: 'flex', gap: 'xsmall' })}>
              <Checkbox rounded={false} />
              모임원
            </label>
          </div>
        </div>
      </section>
      <Suspense fallback={<div className="flex items-center justify-center h-screen w-full">로딩중...</div>}>
        <MeetingList />
      </Suspense>
    </main>
  );
}
