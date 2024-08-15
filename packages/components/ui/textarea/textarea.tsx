import React, { ChangeEvent, ComponentPropsWithoutRef, useLayoutEffect, useRef } from 'react';
import clsx from 'clsx';

import { useControlledState } from '../../utils/useControlledState';
import { XIcon } from '../icon';
import { validateInput } from '../input/input';

import * as inputStyles from '../input/input.css';
import { textareaStyles } from './textarea.css';

interface AutoResizeTextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  value?: string;
  isError?: boolean;
  dispatchError?: (isError: boolean) => void;
  defaultValue?: string | undefined;
  onValueChange: (input: string) => void;
  placeholder?: string;
  minHeight?: number;
  maxHeight?: number;
}

const resizeTextarea = (ref: HTMLTextAreaElement | null, minHeight = 40, maxHeight = 400) => {
  if (ref) {
    ref.rows = 1;
    ref.style.height = 'auto';
    const scrollHeight = ref.scrollHeight;
    ref.style.height = `${Math.max(minHeight, Math.min(scrollHeight, maxHeight))}px`;
  }
};

export const Textarea = ({
  onValueChange,
  dispatchError,
  minHeight = 40,
  maxHeight = 400,
  isError,
  className,
  maxLength,
  ...props
}: AutoResizeTextareaProps) => {
  const [value, setValue] = useControlledState(props.value, props.defaultValue);
  const currentLength = value.length;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    resizeTextarea(textareaRef.current);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onValueChange(event.target.value);
    setValue?.(event.target.value);
    resizeTextarea(textareaRef.current);
  };

  const refresh = () => {
    if (textareaRef?.current) {
      const curr = textareaRef.current;
      curr.value = '';
      const validationResult = validateInput(curr);
      dispatchError?.(validationResult);
      setValue?.('');
      onValueChange?.('');
      resizeTextarea(textareaRef.current);
    }
  };

  return (
    <div className={clsx(inputStyles.inputWrapper, className)}>
      <textarea
        ref={textareaRef}
        onChange={handleChange}
        className={clsx(textareaStyles, inputStyles.inputVariants(), className)}
        style={{ minHeight, maxHeight }}
        maxLength={maxLength}
        {...props}
      />
      <span className={inputStyles.inputCtlWrapper}>
        {currentLength !== 0 && (
          <button className={inputStyles.resetXIconStyles} onClick={refresh}>
            <XIcon color="#fff" />
          </button>
        )}
        {maxLength && (
          <span>
            <span
              className={clsx(currentLength === 0 ? inputStyles.ctlTextMax : isError && inputStyles.errorTextColor)}
            >
              {currentLength <= maxLength ? currentLength : maxLength}
            </span>
            <span className={inputStyles.ctlTextMax}>/{maxLength}</span>
          </span>
        )}
      </span>
    </div>
  );
};
