import Image from 'next/image';
import Link from 'next/link';

import { getI18n } from '@/locales/server';

import { Button } from '@moeasy/storybook/button';
import { Card } from '@moeasy/storybook/card';

import styles from './page.module.css';

export default async function Home() {
  const t = await getI18n();
  return (
    <main className={styles.main}>
      <section>
        <div className={styles['section__left']}>
          <h1>{t('desc')}</h1>
          <p>{t('desc-detail')}</p>
          <div>
            <Button asChild size="small" rounded="small">
              <Link href={'/about'}>자세히 보기</Link>
            </Button>
          </div>
        </div>
        <div style={{ background: 'gray', minHeight: 300, maxHeight: 300, width: 300 }}>
          <Image src={'https://via.placeholder.com/300/1'} width={300} height={300} alt="sample" />
        </div>
      </section>
      <section className={styles['vertical']}>
        <h1>{t('this-week-pop-team')}</h1>
        <p>{t('this-week-pop-team-desc')}</p>
        <div className={styles['card-wrapper']}>
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <Card
              key={idx}
              idx={idx + 1}
              title={'title ' + idx}
              description={`첫째주 한식/ 둘째주 일식/ 셋째주 중식/ 넷째주 양식으로
로테이션 돌립니다. 식후 디저트 필수임. 첫째주 한식/ 둘째주 일식/ 셋째주 중식/ 넷째주 양식으로 로테이션 돌립니다.`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
