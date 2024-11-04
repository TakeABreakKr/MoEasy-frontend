import { useEffect } from 'react';

import { useCallbackRef } from './use-callback-ref';

export const useOnEscape = (activate = true, closeCallback: () => void) => {
  const close = useCallbackRef(closeCallback);
  useEffect(() => {
    if (activate) {
      const activateCloseCallback = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && close) {
          close();
        }
      };
      window.addEventListener('keyup', activateCloseCallback);
      return () => window.removeEventListener('keyup', activateCloseCallback);
    }
  }, [close, activate]);
};
