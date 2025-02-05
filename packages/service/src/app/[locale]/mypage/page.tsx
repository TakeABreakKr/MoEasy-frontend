import { MyPage } from '@/page/mypage';

import * as mainStyle from '../main.css';

export default function Page() {
  return (
    <main className={mainStyle.main}>
      <MyPage />
    </main>
  );
}
