import Link from 'next/link';

import CreateForm from '../_components/create-form';
import { teamModifyAction } from '../action';

export default async function TeamCreatePage() {
  return (
    <div>
      <Link href="/team">모임 리스트로 돌아가기</Link>
      <CreateForm action={teamModifyAction} />
    </div>
  );
}
