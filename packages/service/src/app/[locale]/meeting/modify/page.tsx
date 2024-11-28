import Link from 'next/link';

import CreateForm from '@/widget/meeting/ui/create-form';

export default async function TeamModifyPage() {
  return (
    <div>
      <Link href="/team">모임 리스트로 돌아가기</Link>
      <CreateForm />
    </div>
  );
}
