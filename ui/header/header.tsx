'use client';

import React from 'react';
import clsx from 'clsx';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { AlarmIcon, LogoIconWithText, PlusIcon, SearchIcon, UserIcon } from '../icon';

import * as headerStyles from './header.css';

type User = {
  id: number;
  thumbnail: string;
};

interface HeaderProps {
  user?: User;
}
/**
 * 공통 헤더 컴포넌트
 */
export const Header = ({ user }: HeaderProps) => {
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
          {user && (
            <>
              <button className={headerStyles.rightIcon}>
                <AlarmIcon width={16} height={16} />
              </button>
              <button className={headerStyles.rightIcon}>
                <PlusIcon width={16} height={16} />
              </button>
            </>
          )}
          {user ? (
            user.thumbnail ? (
              <button type="button" className={headerStyles.UserThumbnail}>
                <Image src={user.thumbnail} width={34} height={34} alt="user-thumbnail" />
              </button>
            ) : (
              <button className={headerStyles.rightIcon}>
                <UserIcon width={16} height={16} />
              </button>
            )
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
