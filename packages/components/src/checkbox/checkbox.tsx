import { Checkbox as CheckboxPrimitive, CheckboxProps } from '@radix-ui/react-checkbox';

import styles from './checkbox.module.css';

export default function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive className={styles.checkbox} {...props}>
      ✓
    </CheckboxPrimitive>
  );
}
