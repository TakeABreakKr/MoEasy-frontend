import { RadioGroupIndicator, RadioGroupItem, RadioGroupItemProps } from '@radix-ui/react-radio-group';
import clsx from 'clsx';

import { radioStyle, indicatorStyle } from './radio.css';

export const Radio = ({ className, ...props }: RadioGroupItemProps) => {
  return (
    <RadioGroupItem className={clsx(radioStyle, className)} {...props}>
      <RadioGroupIndicator className={indicatorStyle} />
    </RadioGroupItem>
  );
};
