'use client';

import React from 'react';
import clsx from 'clsx';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChevronDown, LogoIconWithText, SearchIcon, UserIcon } from '../icon';

import { HeaderButton } from './header-button';

import * as headerStyles from './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onCreateAccount?: () => void;
}
/**
 * 공통 헤더 컴포넌트
 */
export const Header = ({ onCreateAccount }: HeaderProps) => {
  const pathname = usePathname();
  return (
    <header className={clsx(headerStyles.header, pathname === '/about' && headerStyles.headerOnAbout)}>
      <div className={headerStyles.headerWrapper}>
        <div className={headerStyles.leftHandSide}>
          <Link className={headerStyles.logo} href="/">
            <LogoIconWithText />
          </Link>
          <ul className={headerStyles.linkWrapper}>
            <li className={clsx(pathname === '/meeting' && headerStyles.active)}>
              <Link href="/meeting">모임 둘러보기</Link>
            </li>
            <li className={clsx(pathname === '/about' && headerStyles.active)}>
              <Link href="/about">ABOUT</Link>
            </li>
            <li className={clsx(pathname === '/notice' && headerStyles.active)}>
              <Link href="/notice">공지사항</Link>
            </li>
          </ul>
        </div>
        <div className={headerStyles.rightHandSide}>
          <button className={clsx(headerStyles.icon, headerStyles.searchIcon)}>
            <SearchIcon width={16} height={16} />
          </button>
          <HeaderButton href="/mypage">내 모임</HeaderButton>
          <button className={headerStyles.icon}>
            <span className={clsx(headerStyles.icon, headerStyles.userIcon)}>
              <UserIcon width={16} height={16} />
            </span>
            <ChevronDown width={10} />
          </button>
        </div>
      </div>
    </header>
  );
};
