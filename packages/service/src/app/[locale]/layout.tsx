import type { Metadata } from 'next';

import { Noto_Sans_KR } from 'next/font/google';

import { Header } from '@moeasy/storybook/header';

import RootProvider from './_provider';

import './global.css';

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] });

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
      <body className={notoSansKR.className}>
        <Header />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
