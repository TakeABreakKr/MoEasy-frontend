import Image from 'next/image';
import Link from 'next/link';

import { getScopedI18n } from '@/locales/server';

import { ChevronDown } from '@moeasy/storybook/ui/icon';

import mainImage from '../../../../../public/about-first.png';

import * as styles from './first.css';

export async function MainHeroSection() {
  const t = await getScopedI18n('main');
  return (
    <section className={styles.firstSection}>
      <div className={styles.firstSectionContent}>
        <div className={styles.sectionLeft}>
          <h1 className={styles.justRound}>{t('desc')}?</h1>
          <pre className={styles.desc}>{t('desc-detail')}</pre>
          <Link href="/about" className={styles.moreLink}>
            {t('더 알아보기')}
            <ChevronDown width={12} transform="rotate(270)" />
          </Link>
        </div>
        <Image src={mainImage} width={423} height={296} alt="sample" />
      </div>
    </section>
  );
}
