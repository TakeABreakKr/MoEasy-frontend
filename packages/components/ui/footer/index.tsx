import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

import { Text } from '../text';

import * as styles from './footer.css';

export function MainFooter({ className, ...props }: ComponentPropsWithoutRef<'footer'>) {
  return (
    <footer className={clsx(styles.footer, className)} {...props}>
      <div className={styles.footerContent}>
        <Text title="large">
          <p>MOEASY</p>
        </Text>
        <div>디스코드 연동 모임 및 활동의 만들기, 관리를 돕는 서비스.</div>
        <div>Desinged by Team TAB</div>
        <div>© 2024 Team TAB. All rights reserved.</div>
      </div>
    </footer>
  );
}
