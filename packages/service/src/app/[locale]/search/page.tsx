import { SearchPage } from '@/page/search';

import * as mainStyle from '../main.css';

export default async function Page() {
  return (
    <main className={mainStyle.main}>
      <SearchPage />
    </main>
  );
}
