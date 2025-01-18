import Link from 'next/link';

import { DiscordIcon } from '@moeasy/storybook/ui/icon';

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
      <div className={lastStyles.container}>
        <Link href="/login" className={lastStyles.discordIcon}>
          <DiscordIcon width={90} height={90} />
        </Link>
        <div className={lastStyles.currentText}>
          디스코드로
          <br />
          간편하게 로그인하세요
        </div>
      </div>
    </section>
  );
}
