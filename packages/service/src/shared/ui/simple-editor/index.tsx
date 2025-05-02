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
  maxLength?: number;
};

const dispatchCallback = ({
  dispatch,
  target,
  recover,
  maxLength,
}: {
  dispatch?: SimpleEditorProps['dispatch'];
  target?: HTMLDivElement | null;
  recover: React.RefObject<string>;
  maxLength?: number;
}) => {
  if (!target) return;
  const content = target.innerHTML;
  const textLength = target.textContent?.length || 0;
  if (typeof maxLength === 'number' && textLength > maxLength) {
    target.innerHTML = recover.current || '';
    return;
  }
  dispatch?.({
    content,
    textLength,
  });
  recover.current = content;
};

export function SimpleEditor({
  dispatch,
  ref,
  disabled,
  adapter,
  initialContent,
  maxLength,
  ...props
}: SimpleEditorProps) {
  const editorRef = useControlledRef<HTMLDivElement>(ref);
  const contentRef = useRef(initialContent);
  const fileRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = DOMPurify.sanitize(initialContent);
      contentRef.current = initialContent;
    }
  }, [initialContent, editorRef]);

  return (
    <div className={styles.editorContainer} {...props}>
      <div
        contentEditable={!disabled}
        ref={editorRef}
        className={styles.editor}
        onInput={() => {
          dispatchCallback({ dispatch, target: editorRef.current, recover: contentRef, maxLength });
        }}
        onPaste={async (e) => {
          const clipboardItems = Array.from(e.clipboardData.items);
          const imageItem = clipboardItems.find((item) => item.type.startsWith('image/'));

          if (imageItem) {
            e.preventDefault();
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
          dispatchCallback({ dispatch, target: editorRef.current, recover: contentRef, maxLength });
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
          dispatchCallback({ dispatch, target: editorRef.current, recover: contentRef, maxLength });
        }}
      />
    </div>
  );
}
