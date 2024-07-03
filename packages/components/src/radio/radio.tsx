import { RadioGroupIndicator, RadioGroupItem, RadioGroupItemProps } from '@radix-ui/react-radio-group';
import clsx from 'clsx';

import styles from './radio.module.css';

export const Radio = ({ className, ...props }: RadioGroupItemProps) => {
  return (
    <RadioGroupItem className={clsx(styles.radio, className)} {...props}>
      <RadioGroupIndicator className={styles.indicator} />
    </RadioGroupItem>
  );
};
