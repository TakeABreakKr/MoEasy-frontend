import CreateForm from '@/widget/meeting/ui/create-form';

import { teamModifyAction } from '../action';

import mainStyle from '../../page.module.css';

export default async function TeamCreatePage() {
  return (
    <main className={mainStyle.main}>
      <section>
        <CreateForm action={teamModifyAction} />
      </section>
    </main>
  );
}
