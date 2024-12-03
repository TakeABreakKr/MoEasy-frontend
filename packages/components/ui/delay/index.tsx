import { PropsWithChildren, useEffect, useRef, useState } from 'react';

export function Delay({
  children,
  fallback,
  ms = 1000,
}: PropsWithChildren<{ ms?: number; fallback?: React.ReactNode }>) {
  const [delayed, setDelayed] = useState(false);
  const msRef = useRef(ms);
  useEffect(() => {
    const milisecond = msRef.current;
    const timer = setTimeout(() => setDelayed(true), milisecond);
    return () => {
      clearTimeout(timer);
    };
  }, [msRef]);

  return delayed ? children : (fallback ?? null);
}
