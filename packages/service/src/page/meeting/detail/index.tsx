import { Suspense } from 'react';

import { MeetingDetailActivity } from './section/activity';
import { MeetingDetailActivityFallback } from './section/activity/fallback';
import { MeetingDetailInfo } from './section/info';
import { MeetingDetailMember } from './section/member';
import { MeetingDetailBanner } from './banner';
import { MeetingTabList } from './tab-list';
import { MeetingType } from './type';

import * as styles from './meeting-detail.css';

export function MeetingDetailPage({ data }: { data: MeetingType }) {
  return (
    <div className={styles.detailWrapper}>
      <MeetingTabList />
      <MeetingDetailBanner />
      <MeetingDetailInfo data={data} />
      <Suspense fallback={<MeetingDetailActivityFallback />}>
        <MeetingDetailActivity />
      </Suspense>
      <MeetingDetailMember />
    </div>
  );
}
