import { MainCommonCard } from '@/widget/card/common';

import * as styles from './list.css';

export function MyPageMeetingList() {
  return (
    <section className={styles.meetingList}>
      {Array.from({ length: 10 }, (_, index) => (
        <MainCommonCard key={index} idx={index + 1} title="의미역 1" description="의미역 1 description" count={10} />
      ))}
    </section>
  );
}
