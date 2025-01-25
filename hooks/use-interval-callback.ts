import { useCallback, useEffect, useRef } from 'react';

import { useCallbackRef } from './use-callback-ref';

export const useIntervalCallback = <T extends (...args: any[]) => void>(callback: T, delay = 1000) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const savedCallback = useCallbackRef(callback);

  const startInterval = useCallback(
    (...args: Parameters<T>) => {
      if (intervalRef.current !== null) return;
      intervalRef.current = setInterval(() => {
        savedCallback?.(...args);
      }, delay);
    },
    [delay, savedCallback],
  );

  const clearIntervalFn = useCallback(() => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  useEffect(() => clearIntervalFn, [clearIntervalFn]);

  return [startInterval, clearIntervalFn] as const;
};
