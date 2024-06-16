import Link from 'next/link';

export default function TeamPage() {
  return (
    <div>
      Hello, Team Page!
      <Link href="/team/create">모임 생성</Link>
    </div>
  );
}
