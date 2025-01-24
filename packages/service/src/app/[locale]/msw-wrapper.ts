'use client';

import { useEffect, useRef } from 'react';

export function MSWWrapper() {
  const apiMocked = useRef(false);
  useEffect(() => {
    if (
      typeof window !== 'undefined'
      //  .env로 관리한다면 적당한 값을 고려해보자
      // && process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
    ) {
      const init = async () => {
        if (apiMocked.current) return;
        const { browserWorker } = await import('@/__test__/browser');
        browserWorker.start();
        apiMocked.current = true;
      };
      init();
    }
  }, []);

  return null;
}
