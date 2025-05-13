import { RadioGroupIndicator, RadioGroupItem, RadioGroupItemProps, RadioGroup } from '@radix-ui/react-radio-group';
import clsx from 'clsx';

import { indicatorStyle, radioVariants } from './radio.css';

type RadioProps = RadioGroupItemProps & {
  variant?: 'primary' | 'secondary';
};

export const Radio = ({ className, variant = 'primary', ...props }: RadioProps) => {
  return (
    <RadioGroupItem className={clsx(radioVariants[variant], className)} {...props}>
      <RadioGroupIndicator className={indicatorStyle} />
    </RadioGroupItem>
  );
};

export { RadioGroup };
