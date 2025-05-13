import { useEffect } from 'react';

export const useBodyScrollLock = (activate = true) => {
  useEffect(() => {
    // 현재 body의 overflow 스타일을 저장
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // body에 overflow: hidden 적용
    if (activate) {
      document.body.style.setProperty('overflow', 'hidden');

      // cleanup 함수에서 원래 스타일로 복원
      return () => {
        document.body.style.setProperty('overflow', originalStyle);
      };
    }
  }, [activate]); // 컴포넌트 마운트/언마운트 시에만 실행
};
