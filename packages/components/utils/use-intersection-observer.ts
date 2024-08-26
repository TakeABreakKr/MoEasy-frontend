import { useEffect, useState } from 'react';

export const useIntersectionObserver = (option?: IntersectionObserverInit) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [inView, setInview] = useState(false);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setInview(true);
        } else {
          setInview(false);
        }
      }
    }, option);
    if (target) {
      intersectionObserver.observe(target);
      return () => {
        intersectionObserver.unobserve(target);
        intersectionObserver.disconnect();
      };
    }
  }, [target, option]);

  return [setTarget, inView] as const;
};
