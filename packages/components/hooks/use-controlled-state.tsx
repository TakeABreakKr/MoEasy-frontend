import { useState } from 'react';

import { noop } from '../utils/lib/noop';

import { useCallbackRef } from './use-callback-ref';

export const useControlledState = <T,>({
  prop,
  defaultProp,
  onChange = noop,
}: { prop?: T; defaultProp?: T; onChange?: (value: T) => void } = {}): [T, (value: T) => void] => {
  const _change = useCallbackRef(onChange);
  const [state, setState] = useState(defaultProp);
  const isControlled = typeof prop !== 'undefined';

  if (isControlled) {
    return [prop, _change];
  }

  if (typeof state === 'undefined') {
    throw new Error('At least Prop or defaultProp should be provided');
  }

  return [state, setState];
};
