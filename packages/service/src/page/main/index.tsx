import Image from 'next/image';
import Link from 'next/link';

import { getI18n } from '@/locales/server';
import { MainCardSection } from '@/widget/main/section';
import { MainCategorySection } from '@/widget/main/section/category';
import { MainLastSection } from '@/widget/main/section/last';
import { MainUpcommingSchedule } from '@/widget/main/section/upcoming';

import { ChevronDown } from '@moeasy/storybook/ui/icon';
import { Separator } from '@moeasy/storybook/ui/separator';
import { Text } from '@moeasy/storybook/ui/text';

import * as styles from './main.css';

export default async function MainPage() {
  const t = await getI18n();
  return (
    <>
      <main className={styles.main}>
        <section className={styles.firstSection}>
          <div className={styles.sectionLeft}>
            <h1 className={styles.justRound}>{t('main.desc')}?</h1>
            <pre className={styles.desc}>{t('main.desc-detail')}</pre>
            <Link href="/about" className={styles.moreLink}>
              {t('main.더 알아보기')}
              <ChevronDown width={12} transform="rotate(270)" />
            </Link>
          </div>
          <div style={{ background: 'gray', minHeight: 300, maxHeight: 300, width: 300 }}>
            <Image src={'https://via.placeholder.com/300/1'} width={300} height={300} alt="sample" />
          </div>
        </section>
        <MainCategorySection title={t('main.카테고리.어떤 모임을 찾으세요?')} />
        <MainCardSection title={t('main.this-week-pop-team')} href="#" />
        <MainCardSection title={t('main.새로 생겼어요')} href="#" />
        <MainCardSection title={t('main.마감임박 활동')} href="#" />
        <MainUpcommingSchedule title={t('main.다가오는 활동')} />
        <MainLastSection />
      </main>
      <Separator direction="horizontal" />
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <Text title="large">
            <p>MOEASY</p>
          </Text>
          <div>디스코드 연동 모임 및 활동의 만들기, 관리를 돕는 서비스.</div>
          <div>Desinged by Team TAB</div>
          <div>© 2024 Team TAB. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
