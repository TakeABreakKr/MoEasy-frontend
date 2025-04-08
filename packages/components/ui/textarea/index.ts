import { ComponentProps } from 'react';

export { Textarea } from './textarea';

export type AutoResizeTextareaProps = ComponentProps<'textarea'> & {
  value?: string;
  isError?: boolean;
  dispatchError?: (isError: boolean) => void;
  defaultValue?: string | undefined;
  onValueChange?: (input: string) => void;
  placeholder?: string;
  minHeight?: number;
  maxHeight?: number;
};

export const resizeTextarea = (ref: HTMLTextAreaElement | null, minHeight = 40, maxHeight = 400) => {
  if (ref) {
    ref.rows = 1;
    ref.style.height = 'auto';
    const scrollHeight = ref.scrollHeight;
    ref.style.height = `${Math.max(minHeight, Math.min(scrollHeight, maxHeight))}px`;
  }
};
