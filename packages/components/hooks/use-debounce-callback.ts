import { useCallback, useRef } from 'react';

import { useCallbackRef } from './use-callback-ref';

export const useDebounceCallback = <T extends (...args: any[]) => any>(callback: T, delay = 300) => {
  const isNavigatingRef = useRef(false);
  const callbackRef = useCallbackRef(callback);

  const goBack = useCallback(() => {
    if (isNavigatingRef.current) {
      return;
    }

    isNavigatingRef.current = true;
    callbackRef();

    // 네비게이션이 완료된 후 플래그 초기화
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, delay);
  }, [delay, callbackRef]);

  return goBack;
};
