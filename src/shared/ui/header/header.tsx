'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '../button/button';
import { AlarmIcon, SearchIcon, UserIcon } from '../icon';

import headerStyles from './header.module.css';

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
    <header>
      <div className={headerStyles['header']}>
        <div className={headerStyles['left-hand-side']}>
          <Link href="/">
            <h1>MO-EASY</h1>
          </Link>
          <ul className={headerStyles['link-wrapper']}>
            <li className={pathname === '/team' ? headerStyles.active : ''}>
              <Link href={'/team'}>모임 둘러보기</Link>
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
          <AlarmIcon width={24} height={24} />
          <UserIcon width={24} height={24} />
          <SearchIcon width={24} height={24} />
          <Button primary size="small" onClick={onCreateAccount}>
            내 모임 관리
          </Button>
        </div>
      </div>
    </header>
  );
};
