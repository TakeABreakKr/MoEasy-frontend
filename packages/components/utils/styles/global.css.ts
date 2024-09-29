// styles/global.css.ts
import { rem } from '../css';
import { createGlobalTheme, createVar, globalStyle } from '@vanilla-extract/css';

export const headerHeight = createVar();

const colorVariables = {
  purple: 'hsl(263, 91%, 62%)',
  neutral: {
    black: 'hsl(0, 0%, 0%)',
    95: 'hsl(240, 3%, 10%)',
    80: 'hsl(240, 2%, 20%)',
    70: 'hsl(210, 1%, 30%)',
    60: 'hsl(210, 1%, 40%)',
    50: 'hsl(210, 1%, 50%)',
    40: 'hsl(210, 2%, 60%)',
    30: 'hsl(210, 3%, 70%)',
    20: 'hsl(210, 4%, 80%)',
    10: 'hsl(210, 5%, 90%)',
    5: 'hsl(210, 10%, 95%)',
    3: 'hsl(210, 20%, 98%)',
    white: 'hsl(0, 0%, 100%)',
  },
  blue: {
    99: 'hsl(213, 85%, 4%)',
    95: 'hsl(213, 93%, 10%)',
    90: 'hsl(213, 93%, 16%)',
    80: 'hsl(213, 92%, 25%)',
    70: 'hsl(213, 91%, 33%)',
    60: 'hsl(213, 90%, 42%)',
    50: 'hsl(213, 100%, 56%)',
    40: 'hsl(213, 100%, 66%)',
    30: 'hsl(213, 100%, 74%)',
    20: 'hsl(213, 100%, 83%)',
    10: 'hsl(213, 100%, 91%)',
    5: 'hsl(213, 100%, 96%)',
  },
  red: {
    99: 'hsl(0, 59%, 10%)',
    95: 'hsl(0, 53%, 12%)',
    90: 'hsl(0, 53%, 16%)',
    80: 'hsl(0, 55%, 28%)',
    70: 'hsl(0, 56%, 38%)',
    60: 'hsl(0, 57%, 48%)',
    50: 'hsl(0, 100%, 62%)',
    40: 'hsl(0, 68%, 68%)',
    30: 'hsl(0, 71%, 76%)',
    20: 'hsl(0, 69%, 84%)',
    10: 'hsl(0, 80%, 96%)',
    5: 'hsl(0, 80%, 98%)',
  },
  yellow: {
    99: 'hsl(42, 97%, 25%)',
    95: 'hsl(42, 98%, 31%)',
    90: 'hsl(42, 98%, 36%)',
    80: 'hsl(42, 96%, 42%)',
    70: 'hsl(43, 96%, 47%)',
    60: 'hsl(44, 96%, 51%)',
    50: 'hsl(47, 100%, 61%)',
    40: 'hsl(51, 100%, 65%)',
    30: 'hsl(51, 100%, 75%)',
    20: 'hsl(51, 100%, 84%)',
    10: 'hsl(51, 100%, 92%)',
    5: 'hsl(51, 100%, 96%)',
  },
} as const;

export const globalVars = createGlobalTheme(':root', {
  color: colorVariables,
  gradient: {
    neutralWhite: 'linear-gradient(270deg, hsl(0, 0%, 100%) 0%, hsla(0, 0%, 100%, 0) 100%)',
    yellowBlue: 'linear-gradient(180deg, hsl(213, 100%, 74%) 0%, hsl(47, 100%, 61%) 100%)',
  },
});

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
