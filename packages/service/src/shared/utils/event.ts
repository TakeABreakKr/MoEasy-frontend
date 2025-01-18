import { KeyboardEvent } from 'react';

/** 영어가 아닌 다른 언어(한국어, 일본어 등) 입력 시 두 번 실행되는 이벤트를 방지하기 위한 검증 메서드  */
export const isComposingOnEnter = (e: KeyboardEvent<HTMLInputElement>) =>
  e.key === 'Enter' && !e.nativeEvent.isComposing;
