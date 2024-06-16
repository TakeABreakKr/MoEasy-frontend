import Link from 'next/link';

export default function MyPageComponent() {
  return (
    <main>
      My Page
      <nav>
        <ul>
          <li>
            <Link href="/mypage/profile">Profile</Link>
          </li>
          <li>
            <Link href="/mypage/setting">Setting</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
