import { RefObject, useEffect, useRef } from 'react';

import { useCallbackRef } from './use-callback-ref';

type INNER_Ref = HTMLElement | RefObject<HTMLElement>;

export const useOutsideClose = ({
  ref,
  activate,
  callback,
}: {
  ref: INNER_Ref[];
  activate?: boolean;
  callback: () => void;
}) => {
  const refs = useRef<INNER_Ref[]>();
  const closeCallback = useCallbackRef(callback);
  refs.current = ref;
  useEffect(() => {
    if (!activate) return;
    function closeEvent(e: MouseEvent) {
      const _refs = refs.current;
      console.log(_refs);
      if (
        _refs?.some((_ref) =>
          _ref instanceof HTMLElement
            ? isInside({ ref: _ref, path: e.composedPath() })
            : _ref.current && isInside({ ref: _ref.current, path: e.composedPath() }),
        )
      )
        return;
      closeCallback();
    }
    window.addEventListener('pointerdown', closeEvent);
    return () => {
      window.removeEventListener('pointerdown', closeEvent);
    };
  }, [refs, activate, closeCallback]);
};

function isInside({ ref, path }: { ref: HTMLElement; path: EventTarget[] }) {
  if (path.includes(ref)) return true;
}
