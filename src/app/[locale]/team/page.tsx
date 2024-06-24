import Link from 'next/link';

export default function TeamPage() {
  return (
    <main>
      Hello, Team Page!
      <Link href="/team/create">모임 생성</Link>
      <Link href="/team/modify">모임 수정</Link>
    </main>
  );
}
