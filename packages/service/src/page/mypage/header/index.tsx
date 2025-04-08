import { MyPageFilter } from './filter';
import { MyPageTabList } from './tab-list';

import * as styles from '../mypage.css';

export function MyPageHeader() {
  return (
    <section className={styles.tabSection}>
      <MyPageTabList />
      <MyPageFilter />
    </section>
  );
}
