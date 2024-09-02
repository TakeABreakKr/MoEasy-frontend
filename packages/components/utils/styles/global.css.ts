// styles/global.css.ts
import { rem } from '../css';
import { createVar, globalStyle } from '@vanilla-extract/css';

export const headerHeight = createVar();

// box-sizing 규칙을 명시합니다.
globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('*::before', {
  boxSizing: 'border-box',
});

globalStyle('*::after', {
  boxSizing: 'border-box',
});

// 폰트 크기의 팽창을 방지합니다.
globalStyle('html', {
  MozTextSizeAdjust: 'none',
  WebkitTextSizeAdjust: 'none',
  textSizeAdjust: 'none',
  vars: {
    [headerHeight]: rem(116),
  },
});

// 기본 여백을 제거하여 작성된 CSS를 더 잘 제어할 수 있습니다.
globalStyle('body, h1, h2, h3, h4, p, figure, blockquote, dl, dd', {
  marginBlockEnd: 0,
});

// list를 role값으로 갖는 ul, ol 요소의 기본 목록 스타일을 제거합니다.
globalStyle('ul[role="list"], ol[role="list"]', {
  listStyle: 'none',
});

// 핵심 body의 기본값을 설정합니다.
globalStyle('body', {
  minHeight: '100vh',
  lineHeight: '1.5',
  margin: 0,
});

// 제목 요소와 상호작용하는 요소에 대해 line-height를 더 짧게 설정합니다.
globalStyle('h1, h2, h3, h4, button, input, label', {
  // lineHeight: '1.1',
});

// 제목에 대한 text-wrap을 balance로 설정합니다.
globalStyle('h1, h2, h3, h4', {
  textWrap: 'balance',
});

// 클래스가 없는 기본 a 태그 요소는 기본 스타일을 가져옵니다.
globalStyle('a:not([class])', {
  textDecorationSkipInk: 'auto',
  color: 'currentColor',
});

// 이미지 관련 작업을 더 쉽게 합니다.
globalStyle('img, picture', {
  maxWidth: '100%',
  display: 'block',
});

// input 및 button 항목들이 글꼴을 상속하도록 합니다.
globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

// 고정된 모든 항목에는 여분의 스크롤 여백이 있어야 합니다.
globalStyle(':target', {
  scrollMarginBlock: '5ex',
});

// 기본 button 스타일
globalStyle('button', {
  background: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

// main 요소에 대한 스타일
globalStyle('main', {
  marginTop: headerHeight,
});
