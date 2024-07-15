import Link from 'next/link';

import CreateForm from '../_components/create-form';
import { teamModifyAction } from '../action';

export default async function TeamModifyPage() {
  return (
    <div>
      <Link href="/team">모임 리스트로 돌아가기</Link>
      <CreateForm action={teamModifyAction} data={{ name: '누군가' }} />
    </div>
  );
}
