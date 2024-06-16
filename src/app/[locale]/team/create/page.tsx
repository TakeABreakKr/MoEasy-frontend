import Link from 'next/link';

export default async function TeamCreatePage() {
  return (
    <div>
      Hello, TeamCreate Page!
      <Link href="/team">모임 리스트로 돌아가기</Link>
    </div>
  );
}
