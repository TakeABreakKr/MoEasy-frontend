import { useState } from 'react';

export const useControlledState = <T,>({
  props,
  defaultProps,
  onChange,
}: {
  props?: T;
  defaultProps?: T;
  onChange?: (value?: T) => void;
}): readonly [T, (value: T) => void] => {
  if (typeof props === 'undefined' && typeof defaultProps === 'undefined') {
    throw new Error("At least one of 'props' or 'defaultProps' should be provided!");
  }
  const [innerState, setInnerState] = useState(defaultProps);

  if (typeof props !== 'undefined' && typeof onChange === 'function') return [props, onChange];

  return [innerState as T, setInnerState];
};
