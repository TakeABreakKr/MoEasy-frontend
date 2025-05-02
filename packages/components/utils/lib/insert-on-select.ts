import { focusElementAndMoveCursorToEnd } from './cursor';

export const insertImageOnSelect = ({
  src,
  element,
  strict,
}: {
  src: string;
  element: HTMLDivElement;
  strict?: boolean;
}) => {
  const img = new Image();
  img.src = src;
  return new Promise<void>((resolve, reject) => {
    img.onload = () => {
      if (!element) return;
      const editorWidth = element.clientWidth;

      if (img.naturalWidth > editorWidth) {
        img.style.width = '100%';
        img.style.height = 'auto';
      }

      // 이미지 삽입
      const range = window.getSelection()?.getRangeAt(0);
      if (!range) return;
      const commonAncestor = range.commonAncestorContainer;
      // 선택 영역이 element 내부에 없을 때 이미지 삽입 제한
      if (!element.contains(commonAncestor instanceof Element ? commonAncestor : commonAncestor.parentElement)) {
        focusElementAndMoveCursorToEnd(element);
        // strict가 true인 경우 에러
        if (strict) {
          throw new Error('선택 영역이 지정된 element 외부입니다.');
        }
        console.warn('선택 영역이 지정된 element 외부입니다.');
        return;
      }
      range.deleteContents();
      range.insertNode(img);

      // 커서를 이미지 뒤로 이동
      range.setStartAfter(img);
      range.setEndAfter(img);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      resolve();
    };
    img.onerror = (e) => {
      reject(e);
    };
  });
};

export const insertImagesOnSelect = async ({
  srcs,
  element,
  strict,
}: {
  srcs: string[];
  element: HTMLDivElement;
  strict?: boolean;
}) => {
  const loadedImages = await Promise.all(
    srcs.map((src) => {
      const img = new Image();
      img.src = src;
      return new Promise<HTMLImageElement>((resolve, reject) => {
        img.onload = () => {
          if (!element) return;
          const editorWidth = element.clientWidth;

          if (img.naturalWidth > editorWidth) {
            img.style.width = '100%';
            img.style.height = 'auto';
          }
          resolve(img);
        };
        img.onerror = (e) => {
          reject(e);
        };
      });
    }),
  );

  const range = window.getSelection()?.getRangeAt(0);
  if (!range) return;
  const commonAncestor = range.commonAncestorContainer;
  // 선택 영역이 element 내부에 없을 때 이미지 삽입 제한
  if (!element.contains(commonAncestor instanceof Element ? commonAncestor : commonAncestor.parentElement)) {
    focusElementAndMoveCursorToEnd(element);
    // strict가 true인 경우 에러
    if (strict) {
      throw new Error('선택 영역이 지정된 element 외부입니다.');
    }
    console.warn('선택 영역이 지정된 element 외부입니다.');
    return;
  }
  range.deleteContents();
  loadedImages.forEach((img) => {
    range.insertNode(img);
  });
  // 커서를 이미지 뒤로 이동
  range.setStartAfter(loadedImages[loadedImages.length - 1]);
  range.setEndAfter(loadedImages[loadedImages.length - 1]);
  window.getSelection()?.removeAllRanges();
  window.getSelection()?.addRange(range);
};

export const insertTextOnSelect = (text: string) => {
  const selection = window.getSelection();
  if (!selection || !selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  range.deleteContents();
  const textNode = document.createTextNode(text);
  range.insertNode(textNode);

  // 커서를 삽입된 텍스트 뒤로 이동
  range.setStartAfter(textNode);
  range.setEndAfter(textNode);
  selection.removeAllRanges();
  selection.addRange(range);
};
