'use client';

import React from 'react';
import clsx from 'clsx';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { AlarmIcon, LogoIconWithText, PlusIcon, SearchIcon, UserIcon } from '../icon';

import * as headerStyles from './header.css';

interface HeaderProps {
  // user?: User;
  // TODO: user 정보 API 개발 후 유저 정보로 변경
  isLogin?: boolean;
}
/**
 * 공통 헤더 컴포넌트
 */
export const Header = ({ isLogin = false }: HeaderProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const loginSearchParams = new URLSearchParams(searchParams);
  loginSearchParams.append('login', 'true');

  return (
    <header className={clsx(headerStyles.header, pathname === '/about' && headerStyles.headerOnAbout)}>
      <div className={headerStyles.headerWrapper}>
        <div className={headerStyles.leftHandSide}>
          <Link className={headerStyles.logo} href="/">
            <LogoIconWithText color="#0071FE" />
          </Link>
          <ul className={headerStyles.linkWrapper}>
            <li className={clsx(headerStyles.linkText, pathname === '/meeting' && headerStyles.active)}>
              <Link href="/meeting">모임 둘러보기</Link>
            </li>
            <li className={clsx(headerStyles.linkText, pathname === '/schedule' && headerStyles.active)}>
              <Link href="/schedule">활동 일정</Link>
            </li>
            <li className={clsx(headerStyles.linkText, pathname === '/about' && headerStyles.active)}>
              <Link href="/about">모이지란?</Link>
            </li>
          </ul>
        </div>
        <div className={headerStyles.rightHandSide}>
          <button className={headerStyles.rightIcon}>
            <SearchIcon width={16} height={16} />
          </button>
          {isLogin && (
            <>
              <button className={headerStyles.rightIcon}>
                <AlarmIcon width={16} height={16} />
              </button>
              <button className={headerStyles.rightIcon}>
                <PlusIcon width={16} height={16} />
              </button>
              <Link href="/mypage" className={headerStyles.rightButton}>
                마이페이지
              </Link>
            </>
          )}
          {isLogin ? (
            <button className={headerStyles.rightIcon}>
              <UserIcon width={16} height={16} />
            </button>
          ) : (
            <button
              onClick={() => {
                window.history.pushState({}, '', `${pathname}?${loginSearchParams.toString()}`);
              }}
              className={headerStyles.rightButton}
            >
              로그인
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
