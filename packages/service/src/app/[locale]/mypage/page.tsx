import Link from 'next/link';

export default function MyPageComponent() {
  return (
    <main>
      My Page
      <nav>
        <ul>
          <li>
            <Link href="/mypage/profile">개인 계정 관리</Link>
          </li>
          <li>
            <Link href="/mypage/setting">알림 설정</Link>
          </li>
          <li>
            <Link href="/mypage/history">모임 히스토리</Link>
          </li>
          <li>
            <Link href="/mypage/share">친구초대 및 공유</Link>
          </li>
          <li>
            <Link href="/mypage/notice">공지사항</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
