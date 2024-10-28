import { ComponentPropsWithoutRef, useId, useState } from 'react';
import { useControlledState } from '../../hooks/use-controlled-state';

import * as styles from './toggle.css';

type ToggleProps = ComponentPropsWithoutRef<'input'> & {
  onToggleChange?: (value?: boolean) => void;
  /** true인 경우 toggle 상태에 따른 외관이 반대로 변한다. */
  inverse?: boolean;
};

export function Toggle({ checked, defaultChecked = false, onToggleChange, inverse, ...props }: ToggleProps) {
  const [toggleState, setToggle] = useControlledState({
    props: checked,
    defaultProps: defaultChecked,
    onChange: onToggleChange,
  });

  return (
    <button
      type="button"
      className={styles.toggleWrapper({ active: inverse ? !toggleState : toggleState })}
      onClick={() => setToggle(!toggleState)}
    >
      <input checked={toggleState} readOnly {...props} hidden />
      <div className={styles.toggleButton} />
    </button>
  );
}
