import { Fragment, Suspense } from 'react';

import TeamList from '@/widget/meeting/ui/team-list';

import { Separator } from '@moeasy/storybook/ui/separator';

import * as mainStyle from '../main.css';
import * as pageStyle from './meeting.css';

export default function TeamPage() {
  return (
    <main className={mainStyle.main}>
      <section className={mainStyle.vertical}>
        <h1>남의집 둘러보기</h1>

        <div className={pageStyle.category}>
          <button className={pageStyle.categoryButton}>카테고리 ▼</button>
          <button className={pageStyle.categoryButton}>날짜 ▼</button>
          <button className={pageStyle.categoryButton}>시간 ▼</button>
          <button className={pageStyle.categoryButton}>✔️ 마감된 남의집 보기</button>
        </div>
        <div className={pageStyle.order}>
          {['인기순', '진행수순', '마감 임박순', '최신 등록순', '낮은 가격순', '높은 가격순'].map((item, index) => (
            <Fragment key={index}>
              <button className={pageStyle.orderButton}>{item}</button>
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
