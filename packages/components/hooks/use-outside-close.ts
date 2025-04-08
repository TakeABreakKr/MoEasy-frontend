import { useEffect, useRef } from 'react';

import { useCallbackRef } from './use-callback-ref';

type INNER_Ref = HTMLElement | React.Ref<HTMLElement> | undefined;

export const useOutsideClose = ({
  ref,
  activate,
  callback,
}: {
  ref: INNER_Ref[];
  activate?: boolean;
  callback: () => void;
}) => {
  const refs = useRef<INNER_Ref[]>(null);
  const closeCallback = useCallbackRef(callback);
  refs.current = ref;
  useEffect(() => {
    if (!activate) return;
    function closeEvent(e: MouseEvent) {
      const _refs = refs.current;
      if (
        _refs?.some((_ref) =>
          _ref instanceof HTMLElement
            ? isInside({ ref: _ref, path: e.composedPath() })
            : _ref && typeof _ref !== 'function' && isInside({ ref: _ref.current, path: e.composedPath() }),
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

function isInside({ ref, path }: { ref: HTMLElement | null; path: EventTarget[] }) {
  if (!ref) return false;
  if (path.includes(ref)) return true;
}
