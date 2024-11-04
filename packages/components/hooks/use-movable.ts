import { useEffect, useRef, useState } from 'react';

import { safeRequestAnimationFrame } from '../utils/lib/safe-raf';

/**
 * 팝업 창에 등록하면 drag로 이동할 수 있게 도와주는 커스텀 훅
 * @example
 * ```tsx
 * import * as styles from 'index.css';
 *
 * function Popup({ children }) {
 *      const { ref, isDragging, onMouseDown } = useMovablePopup();
 *
 *      return (
 *        <div
 *          className={clsx(styles.popupOverlay({ isDragging }))}
 *          ref={ref}
 *          onMouseDown={onMouseDown}
 *        >
 *          {children}
 *        </div>
 *      );
 *  }
 * ```
 */
export const useMovablePopup = (activate = true) => {
  const [isDragging, setDragging] = useState(false);
  const dragOff = useRef({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!ref.current || !activate) return;
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
    const rect = ref.current.getBoundingClientRect();
    dragOff.current.x = e.clientX - rect.left;
    dragOff.current.y = e.clientY - rect.top;
  };

  useEffect(() => {
    if (isDragging && activate) {
      const onMouseMove = (e: MouseEvent) => {
        safeRequestAnimationFrame(() => {
          if (ref.current) {
            e.preventDefault();
            e.stopPropagation();
            const { x, y } = dragOff.current;
            ref.current.style.left = `${e.clientX - x}px`;
            ref.current.style.top = `${e.clientY - y}px`;
          }
        });
      };
      const onMouseUp = () => {
        setDragging(false);
      };
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      return () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };
    }
  }, [isDragging, activate]);

  return { ref, isDragging, onMouseDown } as const;
};
