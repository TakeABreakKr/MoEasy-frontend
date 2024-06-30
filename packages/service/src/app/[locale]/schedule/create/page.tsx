import Link from 'next/link';

export default async function ScheduleCreatePage() {
  return (
    <div>
      Hello, ScheduleCreate Page!
      <Link href="/schedule">일정 리스트로 돌아가기</Link>
    </div>
  );
}
