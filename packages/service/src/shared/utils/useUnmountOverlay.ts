import { useEffect, useRef } from 'react';
import { overlay } from 'overlay-kit';

/**
 * 상위 컴포넌트가 unmount 되는 경우 overlay를 unmount 하는 hook
 */
export const useUnmountOverlay = () => {
  const overlayRef = useRef('');
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      overlayRef?.current && overlay.unmount(overlayRef.current);
    };
  }, []);
  return overlayRef;
};
