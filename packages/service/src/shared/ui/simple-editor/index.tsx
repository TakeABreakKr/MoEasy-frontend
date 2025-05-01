'use client';

import { type ComponentProps, useEffect, useRef } from 'react';
import DOMPurify from 'dompurify';

import { useControlledRef } from '@moeasy/storybook/hooks/use-controlled-ref';
import { ImageIcon } from '@moeasy/storybook/ui/icon';
import { insertImageOnSelect, insertTextOnSelect } from '@moeasy/storybook/utils/lib/insert-on-select';

import * as styles from './editor.css';

type SimpleEditorProps = ComponentProps<'div'> & {
  dispatch?: (param: { content: string; textLength: number }) => void;
  disabled?: boolean;
  adapter: (file: DataTransferItem | File) => Promise<string>;
  initialContent: string;
};

const dispatchCallback = (dispatch: SimpleEditorProps['dispatch'], target?: HTMLDivElement | null) => {
  if (!target) return;
  const content = target.innerHTML;
  const textLength = target.textContent?.length || 0;
  dispatch?.({
    content,
    textLength,
  });
};

export function SimpleEditor({ dispatch, ref, disabled, adapter, initialContent, ...props }: SimpleEditorProps) {
  const editorRef = useControlledRef<HTMLDivElement>(ref);
  const fileRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = DOMPurify.sanitize(initialContent);
    }
  }, [initialContent, editorRef]);

  return (
    <div className={styles.editorContainer} {...props}>
      <div
        contentEditable={!disabled}
        ref={editorRef}
        className={styles.editor}
        onInput={() => {
          dispatchCallback(dispatch, editorRef.current);
        }}
        onPaste={async (e) => {
          const clipboardItems = Array.from(e.clipboardData.items);
          const imageItem = clipboardItems.find((item) => item.type.startsWith('image/'));

          if (imageItem) {
            e.preventDefault();
            // TODO: backend image upload 개발 완료 후 외부 저장소의 url로 대체
            const result = await adapter(imageItem);
            if (!editorRef || typeof editorRef === 'function' || !editorRef.current) {
              return;
            }
            await insertImageOnSelect({ src: result, element: editorRef.current });
          } else {
            const text = e.clipboardData.getData('text/plain');
            if (text) {
              e.preventDefault();
              insertTextOnSelect(text);
            }
          }
          dispatchCallback(dispatch, editorRef.current);
        }}
      />
      <button className={styles.editorImageUpload} type="button" onClick={() => fileRef.current?.click()}>
        <ImageIcon />
      </button>
      <input
        type="file"
        accept="image/*"
        hidden
        ref={fileRef}
        onChange={async (e) => {
          const imgFile = e.target.files?.[0];
          if (!editorRef || typeof editorRef === 'function' || !editorRef.current || !imgFile) {
            return;
          }
          const result = await adapter(imgFile);
          await insertImageOnSelect({ src: result, element: editorRef.current });
          dispatchCallback(dispatch, editorRef.current);
        }}
      />
    </div>
  );
}
