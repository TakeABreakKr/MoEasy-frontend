import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <h1>MoEasy 메인 페이지</h1>
        <ul>
          <li>
            <Link href="team/create">모임 생성</Link>
          </li>
          <li>
            <Link href="team">모임 리스트</Link>
          </li>
          <li>
            <Link href="schedule">일정 리스트</Link>
          </li>
          <li>
            <Link href="schedule/create">일정 생성</Link>
          </li>
          <li>
            <Link href="/mypage">마이페이지</Link>
          </li>
        </ul>
      </nav>
      메인페이지입니다.
    </main>
  );
}
