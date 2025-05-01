export const insertImageOnSelect = ({ src, element }: { src: string; element: HTMLDivElement }) => {
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
