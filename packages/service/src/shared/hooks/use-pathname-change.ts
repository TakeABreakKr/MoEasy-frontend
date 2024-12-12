'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

import { useCallbackRef } from '@moeasy/storybook/hooks/use-callback-ref';

export const usePathnameChange = (callback: () => void) => {
  const pathName = usePathname();
  const initPathName = useRef(pathName);
  const callbackRef = useCallbackRef(callback);
  useEffect(() => {
    if (pathName !== initPathName.current) {
      callbackRef();
    }
  }, [pathName, callbackRef]);
};
