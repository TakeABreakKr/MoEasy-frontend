import { ComponentPropsWithRef } from 'react';

import Link, { LinkProps } from 'next/link';

import { CrossIcon } from '../icon';

import * as styles from './header-button.css';

type HeaderButtonProps = {
  children: React.ReactNode;
  icon?: (props: ComponentPropsWithRef<'svg'>) => React.ReactNode;
} & (({ href: string } & Omit<LinkProps, 'href'>) | ({ href?: never } & ComponentPropsWithRef<'button'>));

export const HeaderButton = ({ children, icon, ...props }: HeaderButtonProps) => {
  if (typeof props.href === 'string')
    return (
      <Link className={styles.button} {...props}>
        <span className="text">{children}</span>
        <span className={styles.icon}>
          {children}
          {icon ? icon({ className: styles.icon }) : <CrossIcon className={styles.defaultIcon} />}
        </span>
      </Link>
    );
  return (
    <button className={styles.button} {...props}>
      <span className="text">{children}</span>
      <span className={styles.icon}>
        {children}
        {icon ? icon({ className: styles.defaultIcon }) : <CrossIcon className={styles.defaultIcon} />}
      </span>
    </button>
  );
};
