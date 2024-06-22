import Link from 'next/link';

import { getI18n } from '@/locales/server';

import styles from './page.module.css';

export default async function Home() {
  const t = await getI18n();
  return (
    <main className={styles.main}>
      <nav>
        <h1>
          {t('title')} {t('mainpage')}
        </h1>
        <ul>
          <li>
            <Link href="team/create">
              {t('team')} {t('create')}
            </Link>
          </li>
          <li>
            <Link href="team">
              {t('team')} {t('list')}
            </Link>
          </li>
          <li>
            <Link href="schedule">
              {t('schedule')} {t('list')}
            </Link>
          </li>
          <li>
            <Link href="schedule/create">
              {t('schedule')} {t('create')}
            </Link>
          </li>
          <li>
            <Link href="/mypage">{t('mypage')}</Link>
          </li>
        </ul>
      </nav>
      메인페이지입니다.
    </main>
  );
}
