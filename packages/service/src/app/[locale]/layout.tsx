import type { Metadata } from 'next';
import clsx from 'clsx';

import { pretendard } from '@moeasy/storybook/font';
import { Header } from '@moeasy/storybook/ui/header';

import RootProvider from './_provider';

import '@moeasy/storybook/utils/styles/global.css';

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
      <body className={clsx(pretendard.className, pretendard.variable)}>
        <Header />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
