import { EllipsisIcon } from '@moeasy/storybook/ui/icon';

import { MainLastSectionLoginButton } from './login-button';

import * as styles from '../section.css';
import * as lastStyles from './last.css';

export function MainLastSection() {
  return (
    <section className={styles.section}>
      <div className={lastStyles.container}>
        <div className={lastStyles.currentIcon}>
          <EllipsisIcon />
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
