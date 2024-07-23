import { Checkbox as CheckboxPrimitive, CheckboxProps } from '@radix-ui/react-checkbox';
import clsx from 'clsx';

import CheckIcon from '../icon/check-icon';

import styles from './checkbox.module.css';

export type CustomCheckProps = CheckboxProps & {
  /** 둥근지 여부 */
  rounded?: boolean;
};

export default function Checkbox({ rounded = true, ...props }: CustomCheckProps) {
  return (
    <CheckboxPrimitive className={clsx(styles.checkbox, rounded && styles.rounded)} {...props}>
      <CheckIcon className={styles.icon} />
    </CheckboxPrimitive>
  );
}
