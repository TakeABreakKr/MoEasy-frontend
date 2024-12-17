import { SearchPage } from '@/page/search';

import * as mainStyle from '../main.css';

export default async function ScheduleCreatePage() {
  return (
    <main className={mainStyle.main}>
      <SearchPage />
    </main>
  );
}
