import type { Metadata } from 'next';
import clsx from 'clsx';
import { Toaster } from 'sonner';

import { getUserInfo } from '@/entities/home/api/server';
import { LoginPopup } from '@/widget/popup/login';

import { pretendard } from '@moeasy/storybook/font';
import { Header } from '@moeasy/storybook/ui/header';

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
  const userData = await getUserInfo();

  return (
    <html lang={locale}>
      <body className={clsx(pretendard.className, pretendard.variable)}>
        <Header user={userData} />
        <MSWWrapper />
        <RootProvider locale={locale}>
          <LoginPopup />
          <Toaster />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
