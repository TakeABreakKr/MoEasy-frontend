import { ComponentPropsWithRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { PlusIcon } from '@/icon';

import styles from './header-button.module.css';

type HeaderButtonProps = {
  children: React.ReactNode;
  icon?: (props: ComponentPropsWithRef<'svg'>) => React.ReactNode;
  asChild?: boolean;
};

export const HeaderButton = ({ children, icon, asChild = false }: HeaderButtonProps) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={styles.button}>
      <span className="text">{children}</span>
      <span className={styles.icon}>
        {children}
        {icon ? icon({ className: styles.default_icon }) : <PlusIcon className={styles.default_icon} />}
      </span>
    </Comp>
  );
};
