'use client';

import React from 'react';
import clsx from 'clsx';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { AlarmIcon, LogoIconWithText, PlusIcon, SearchIcon, UserIcon } from '../icon';

import * as headerStyles from './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
}
/**
 * 공통 헤더 컴포넌트
 */
export const Header = ({}: HeaderProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const loginSearchParams = new URLSearchParams(searchParams);
  loginSearchParams.append('login', 'true');

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerWrapper}>
        <div className={headerStyles.leftHandSide}>
          <Link href="/">
            <LogoIconWithText />
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
          <button className={headerStyles.rightIcon}>
            <AlarmIcon width={16} height={16} />
          </button>
          <button className={headerStyles.rightIcon}>
            <PlusIcon width={16} height={16} />
          </button>
          <Link href="/mypage" className={headerStyles.rightButton}>
            마이페이지
          </Link>
          <Link
            href={{
              query: loginSearchParams.toString(),
            }}
            className={headerStyles.rightIcon}
          >
            <UserIcon width={16} height={16} />
          </Link>
        </div>
      </div>
    </header>
  );
};
