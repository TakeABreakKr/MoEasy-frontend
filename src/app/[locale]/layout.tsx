import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MoEasy - Discord 연동 모임 관리 서비스',
  description: 'MoEasy에 오신 것을 환영합니다.',
};
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Link href={'/'}>홈으로</Link>
        {children}
      </body>
    </html>
  );
}
