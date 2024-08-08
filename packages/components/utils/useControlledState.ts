import { useState } from 'react';

export const useControlledState = <T>(value?: T, defaultValue?: T) => {
  const [state, setState] = useState(defaultValue);
  return [(value ?? state) as T, typeof value === 'undefined' ? setState : undefined] as const;
};
