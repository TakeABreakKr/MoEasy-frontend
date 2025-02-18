import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import clsx from 'clsx';

import { LoginPopup } from '@/widget/popup/login';

import { pretendard } from '@moeasy/storybook/font';
import { Header } from '@moeasy/storybook/ui/header';

import './mock';

import RootProvider from './_provider';
import { MSWWrapper } from './msw-wrapper';

import '@moeasy/storybook/utils/styles/global.css';

export const metadata: Metadata = {
  title: 'MoEasy - Discord 연동 모임 관리 서비스',
  description: 'MoEasy에 오신 것을 환영합니다.',
};
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('AccessToken')?.value;

  return (
    <html lang={locale}>
      <body className={clsx(pretendard.className, pretendard.variable)}>
        <Header isLogin={!!accessToken} />
        <MSWWrapper />
        <RootProvider locale={locale}>
          <LoginPopup />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
