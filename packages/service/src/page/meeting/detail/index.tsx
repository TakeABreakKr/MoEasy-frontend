import { MeetingDetailActivity } from './section/activity';
import { MeetingDetailInfo } from './section/info';
import { MeetingDetailMember } from './section/member';
import { MeetingDetailBanner } from './banner';
import { MeetingTabList } from './tab-list';

import * as styles from './meeting-detail.css';

export function MeetingDetailPage({ meetingId }: { meetingId: string }) {
  return (
    <div className={styles.detailWrapper}>
      <MeetingTabList />
      <MeetingDetailBanner />
      <MeetingDetailInfo />
      <MeetingDetailActivity />
      <MeetingDetailMember />
    </div>
  );
}
