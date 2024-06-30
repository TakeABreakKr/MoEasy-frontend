import Link from 'next/link';

export default function SchedulePage() {
  return (
    <div>
      Hello, Schedule Page!
      <Link href="/schedule/create">일정 생성</Link>
    </div>
  );
}
