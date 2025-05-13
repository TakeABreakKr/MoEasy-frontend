'use client';

import { useRef, useState } from 'react';

import { ImageIcon } from '@moeasy/storybook/ui/icon';
import {
  insertImageOnSelect,
  insertImagesOnSelect,
  insertTextOnSelect,
} from '@moeasy/storybook/utils/lib/insert-on-select';

import { SimpleEditorProps, useSimpleEditorDispatch, useSimpleEditorInitializer } from './utils';

import * as styles from './editor.css';

export function SimpleEditor({
  dispatch,
  ref,
  disabled,
  adapter,
  initialContent,
  maxLength,
  fileUploadLimit = 3,
  allowImageUpload = true,
  LoadingComponent,
  ...props
}: SimpleEditorProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const editorRef = useSimpleEditorInitializer({ ref, initialContent });
  const dispatchCallback = useSimpleEditorDispatch({
    targetRef: editorRef,
    dispatch,
    maxLength,
    initialContent,
  });

  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.editorContainer} {...props}>
      <div
        contentEditable={!disabled}
        ref={editorRef}
        className={styles.editor}
        onInput={() => {
          dispatchCallback();
        }}
        onPaste={async (e) => {
          const clipboardItems = Array.from(e.clipboardData.items);
          const imageItem = clipboardItems.find((item) => item.type.startsWith('image/'));

          if (imageItem) {
            e.preventDefault();
            const [result] = await adapter([imageItem]);
            if (!editorRef || typeof editorRef === 'function' || !editorRef.current) {
              return;
            }
            await insertImageOnSelect({ src: result, element: editorRef.current, strict: true });
          } else {
            const text = e.clipboardData.getData('text/plain');
            if (text) {
              e.preventDefault();
              insertTextOnSelect(text);
            }
          }
          dispatchCallback();
        }}
      />
      <button className={styles.editorImageUpload} type="button" onClick={() => fileRef.current?.click()}>
        <ImageIcon />
      </button>
      {loading && LoadingComponent}
      {allowImageUpload && (
        <input
          type="file"
          accept="image/*"
          hidden
          ref={fileRef}
          multiple
          onChange={async (e) => {
            const imgFiles = e.target.files;
            if (!editorRef || typeof editorRef === 'function' || !editorRef.current || !imgFiles) {
              return;
            }
            LoadingComponent && setLoading(true);
            const result = await adapter(
              Array.from(imgFiles)
                .filter((file) => file.type.includes('image'))
                .slice(0, fileUploadLimit),
            );
            await insertImagesOnSelect({ srcs: result, element: editorRef.current, strict: true });
            dispatchCallback();
            LoadingComponent && setLoading(false);
          }}
        />
      )}
    </div>
  );
}
