'use client';

import { useEffect, useId, useState } from 'react';
import clsx from 'clsx';

import { Text } from '@moeasy/storybook/ui/text';
import { headerHeight } from '@moeasy/storybook/utils/styles/global.css';

import { MEETING_DETAIL_TAB_LIST } from '../const';

import { useHash } from './use-hash';

import * as styles from './tab-list.css';

const useScrollPaddingManager = () => {
  const id = useId();
  useEffect(() => {
    const randomId = `scroll-padding-manager-${id}`;
    // 스타일 요소 생성
    const styleElement = document.createElement('style');
    styleElement.id = randomId;
    styleElement.textContent = `
      html {
        scroll-behavior: smooth;
        scroll-padding-top: ${headerHeight};
      }
    `;

    // head에 스타일 요소 추가
    document.head.appendChild(styleElement);

    // 클린업 함수: 컴포넌트 언마운트 시 스타일 제거
    return () => {
      const existingStyle = document.getElementById(randomId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, [id]); //
};

export function MeetingTabList() {
  const hash = useHash();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentHash = mounted ? hash || 'home' : null;

  useScrollPaddingManager();

  return (
    <ul className={styles.tabList}>
      {MEETING_DETAIL_TAB_LIST.map(({ key, value }) => (
        <li key={key}>
          <Text asChild headline="small">
            <a
              className={clsx(styles.tabItem, mounted && key === currentHash && styles.tabItemActive)}
              href={`#${key}`}
            >
              {value}
            </a>
          </Text>
        </li>
      ))}
    </ul>
  );
}
