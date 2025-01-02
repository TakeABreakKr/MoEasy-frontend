import Image from 'next/image';
import Link from 'next/link';

import { getI18n } from '@/locales/server';
import { MainCardActivitySection } from '@/widget/main/section/activity';
import { MainCategorySection } from '@/widget/main/section/category';
import { MainLastSection } from '@/widget/main/section/last';
import { MainCardMeetingSection } from '@/widget/main/section/meeting';
import { MainUpcommingSchedule } from '@/widget/main/section/upcoming';

import { MainFooter } from '@moeasy/storybook/ui/footer';
import { ChevronDown } from '@moeasy/storybook/ui/icon';
import { Separator } from '@moeasy/storybook/ui/separator';

import * as styles from './main.css';

export async function MainPageLoading() {
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
        <MainCardMeetingSection title={t('main.this-week-pop-team')} href="#" loading />
        <MainCardMeetingSection title={t('main.새로 생겼어요')} href="#" loading />
        <MainCardActivitySection title={t('main.마감임박 활동')} href="#" loading />
        <MainUpcommingSchedule title={t('main.다가오는 활동')} />
        <MainLastSection />
      </main>
      <Separator direction="horizontal" />
      <MainFooter />
    </>
  );
}
