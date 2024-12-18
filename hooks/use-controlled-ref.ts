import { useEffect, useRef } from 'react';

export const useControlledRef = <T extends HTMLElement>(forwardedRef?: React.ForwardedRef<T> | null) => {
  const innerRef = useRef<T>(null);
  useEffect(() => {
    if (typeof forwardedRef === 'function') {
      // 외부 ref가 callback일 경우, 내부 ref를 callback으로 전달
      forwardedRef(innerRef.current);
    }
  }, [forwardedRef]);

  // 외부 ref가 객체 형태라면 그대로 반환, 그렇지 않으면 내부 ref 반환
  return typeof forwardedRef === 'object' && forwardedRef !== null ? forwardedRef : innerRef;
};
