import CreateForm from '@/widget/meeting/ui/create-form';

import { teamModifyAction } from '../action';

import * as mainStyle from '../../main.css';

export default async function TeamCreatePage() {
  return (
    <main className={mainStyle.main}>
      <CreateForm action={teamModifyAction} />
    </main>
  );
}
