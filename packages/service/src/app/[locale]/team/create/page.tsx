import CreateForm from '../_components/create-form';
import { teamModifyAction } from '../action';

export default async function TeamCreatePage() {
  return (
    <main>
      <CreateForm action={teamModifyAction} />
    </main>
  );
}
