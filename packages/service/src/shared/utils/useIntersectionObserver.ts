import { useEffect, useState } from 'react';

export const useIntersectionObserver = (callback: IntersectionObserverCallback, option?: IntersectionObserverInit) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(callback, option);
    if (target) {
      intersectionObserver.observe(target);
      return () => {
        intersectionObserver.unobserve(target);
      };
    }
  }, [target, callback, option]);

  return setTarget;
};
