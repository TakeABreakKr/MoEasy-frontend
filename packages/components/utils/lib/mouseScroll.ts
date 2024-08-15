import { WheelEvent } from 'react';

export function horizontalScrollHandler(event: WheelEvent<HTMLElement>) {
  event.preventDefault(); // 기본 세로 스크롤 방지
  const container = event.currentTarget; // 이벤트가 발생한 요소 (스크롤 컨테이너)
  container.scrollLeft += event.deltaY; // 세로 스크롤을 가로 스크롤로 전환
}
