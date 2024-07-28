import { Checkbox as CheckboxPrimitive, CheckboxProps } from '@radix-ui/react-checkbox';

import CheckIcon from '../icon/check-icon';

import { checkboxVariants, checkIcon } from './checkbox.css';

export type CustomCheckProps = CheckboxProps & {
  /** 둥근지 여부 */
  rounded?: boolean;
};

export default function Checkbox({ rounded = true, ...props }: CustomCheckProps) {
  return (
    <CheckboxPrimitive className={checkboxVariants({ rounded })} {...props}>
      <CheckIcon className={checkIcon} />
    </CheckboxPrimitive>
  );
}
