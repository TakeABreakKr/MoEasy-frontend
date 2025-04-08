import { MyPageHeader } from '@/page/mypage/header';

import * as mainStyle from '../main.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={mainStyle.main}>
      <MyPageHeader />
      {children}
    </main>
  );
}
