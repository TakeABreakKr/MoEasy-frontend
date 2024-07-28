import { Fragment, Suspense } from 'react';

import TeamList from '@/widget/meeting/ui/team-list';

import { Separator } from '@moeasy/storybook/src/separator';

import mainStyle from '../page.module.css';
import pageStyle from './page.module.css';

export default function TeamPage() {
  return (
    <main className={mainStyle.main}>
      <section className={mainStyle.vertical}>
        <h1>남의집 둘러보기</h1>

        <div className={pageStyle.category}>
          <button>카테고리 ▼</button>
          <button>날짜 ▼</button>
          <button>시간 ▼</button>
          <button>✔️ 마감된 남의집 보기</button>
        </div>
        <div className={pageStyle.order}>
          {['인기순', '진행수순', '마감 임박순', '최신 등록순', '낮은 가격순', '높은 가격순'].map((item, index) => (
            <Fragment key={index}>
              <button>{item}</button>
              {index === 5 ? null : <Separator direction="vertical" />}
            </Fragment>
          ))}
        </div>
      </section>
      <Suspense fallback={<div className="flex items-center justify-center h-screen w-full">로딩중...</div>}>
        <TeamList />
      </Suspense>
    </main>
  );
}
