/**
 * 특정 element 내부에 커서를 놓는 함수
 * @param element - 커서를 놓을 element
 */
export const focusElementAndMoveCursorToEnd = (element: HTMLDivElement) => {
  element.focus(); // 포커스 부여

  const selection = window.getSelection();
  const range = document.createRange();

  /** 마지막 자식 노드의 끝에 커서를 놓기 */
  range.selectNodeContents(element);
  range.collapse(false); // false = range 끝으로 커서 이동

  selection?.removeAllRanges();
  selection?.addRange(range);
};
