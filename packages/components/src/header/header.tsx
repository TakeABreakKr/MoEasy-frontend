'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import AlarmHover, { AlarmProps } from '../alarm/alarm';
import { Button } from '../button/button';
import { SearchIcon, UserIcon } from '../icon';

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
          <AlarmHover itemList={itemList}></AlarmHover>
          <UserIcon width={24} height={24} />
          <SearchIcon width={24} height={24} />
          <Button asChild primary size="small" onClick={onCreateAccount}>
            <Link href={'/mypage'}>내 모임 관리</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
