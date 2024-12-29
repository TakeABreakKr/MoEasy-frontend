import Link from 'next/link';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { DiscordIcon } from '@moeasy/storybook/ui/icon';
import { Text } from '@moeasy/storybook/ui/text';

import * as styles from '../section.css';

export function MainLastSection() {
  return (
    <section className={styles.section}>
      <div>
        <Text title="large">지금 우리 동네는?</Text>
        <Text title="large">OO시 110개 활동 진행중</Text>
      </div>
      <div className={sprinkles({ display: 'flex', gap: 'small' })}>
        <Link href="/login">
          <DiscordIcon width={50} height={50} />
        </Link>
        <Text title="large">
          디스코드로
          <br />
          간편하게 로그인하세요
        </Text>
      </div>
    </section>
  );
}
