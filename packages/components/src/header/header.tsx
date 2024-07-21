'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AlarmProps } from '../alarm/alarm';
import { ChevronDown, LogoIconWithText, SearchIcon, UserIcon } from '../icon';

import { HeaderButton } from './header-button';

import headerStyles from './header.module.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onCreateAccount?: () => void;
  itemList?: AlarmProps['itemList'];
}
/**
 * 공통 헤더 컴포넌트
 */
export const Header = ({ onCreateAccount, itemList = [] }: HeaderProps) => {
  const pathname = usePathname();
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles['header-wrapper']}>
        <div className={headerStyles['left-hand-side']}>
          <Link href="/">
            <LogoIconWithText />
          </Link>
          <ul className={headerStyles['link-wrapper']}>
            <li className={pathname === '/meeting' ? headerStyles.active : ''}>
              <Link href={'/meeting'}>모임 둘러보기</Link>
            </li>
            <li className={pathname === '/about' ? headerStyles.active : ''}>
              <Link href={'/about'}>ABOUT</Link>
            </li>
            <li className={pathname === '/notice' ? headerStyles.active : ''}>
              <Link href={'/notice'}>공지사항</Link>
            </li>
          </ul>
        </div>
        <div className={headerStyles['right-hand-side']}>
          <SearchIcon width={24} height={24} />
          <HeaderButton href="/mypage">내 모임</HeaderButton>
          <UserIcon width={24} height={24} />
          <ChevronDown width={10} />
        </div>
      </div>
    </header>
  );
};
