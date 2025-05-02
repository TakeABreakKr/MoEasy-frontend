import { useEffect, useRef } from 'react';
import DOMPurify from 'dompurify';

import { useControlledRef } from '@moeasy/storybook/hooks/use-controlled-ref';

export type SimpleEditorProps = React.ComponentProps<'div'> & {
  dispatch?: (param: { content: string; textLength: number }) => void;
  disabled?: boolean;
  adapter: (files: DataTransferItem[] | File[]) => Promise<string[]>;
  initialContent: string;
  maxLength?: number;
  fileUploadLimit?: number;
  allowImageUpload?: boolean;
  LoadingComponent?: React.ReactNode;
};

export const useSimpleEditorInitializer = ({
  ref,
  initialContent,
}: {
  ref?: React.ForwardedRef<HTMLDivElement>;
  initialContent: string;
}) => {
  const editorRef = useControlledRef<HTMLDivElement>(ref);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = DOMPurify.sanitize(initialContent);
    }
  }, [initialContent, editorRef]);

  return editorRef;
};

export const useSimpleEditorDispatch = ({
  targetRef,
  dispatch,
  maxLength,
  initialContent = '',
}: {
  targetRef: React.RefObject<HTMLDivElement | null>;
  dispatch: SimpleEditorProps['dispatch'];
  maxLength?: number;
  initialContent?: string;
}) => {
  const contentRef = useRef<string>(initialContent);

  const dispatchCallback = () =>
    simpleEditorDispatchCallback({
      dispatch,
      target: targetRef.current,
      recover: contentRef,
      maxLength,
    });

  return dispatchCallback;
};

export const simpleEditorDispatchCallback = ({
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
