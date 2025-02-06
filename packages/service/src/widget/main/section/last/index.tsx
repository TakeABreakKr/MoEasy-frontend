import { MainLastSectionLoginButton } from './login-button';

import * as styles from '../section.css';
import * as lastStyles from './last.css';

export function MainLastSection() {
  return (
    <section className={styles.section}>
      <div className={lastStyles.container}>
        <div className={lastStyles.currentIcon}>
          {[1, 2, 3].map((idx) => (
            <div key={idx} className={lastStyles.currentIconItem} />
          ))}
        </div>
        <div className={lastStyles.currentText}>
          지금 우리 동네는?
          <br />
          OO시 110개 활동 진행중
        </div>
      </div>
      <MainLastSectionLoginButton />
    </section>
  );
}
