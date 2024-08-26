import { useMemo, useRef } from 'react';

export default function useMouseSnapSlide({ speed = 1 }: { speed?: number } = {}) {
  const isMouseDownRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);

  const callbacks = useMemo(
    () => ({
      onMouseDown: (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const { currentTarget } = e;
        isMouseDownRef.current = true;
        startXRef.current = e.pageX - currentTarget.offsetLeft;
        scrollLeftRef.current = currentTarget.scrollLeft;
        currentTarget.style.scrollSnapType = 'none';
      },
      onMouseLeave: async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        isMouseDownRef.current = false;
        e.currentTarget.style.removeProperty('scroll-snap-type');
      },
      onMouseUp: async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        isMouseDownRef.current = false;
        e.currentTarget.style.removeProperty('scroll-snap-type');
      },
      onMouseMove: (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (!isMouseDownRef.current) return;
        e.preventDefault();
        const { currentTarget } = e;
        const x = e.pageX - currentTarget.offsetLeft;
        const walk = (x - startXRef.current) * speed;
        currentTarget.scrollLeft = scrollLeftRef.current - walk;
      },
    }),
    [speed],
  );
  return {
    isMouseDownRef,
    startXRef,
    scrollLeftRef,
    callbacks,
  };
}
