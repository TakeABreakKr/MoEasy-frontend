import React, { ChangeEvent, useLayoutEffect } from 'react';
import clsx from 'clsx';

import { useControlledRef } from '../../hooks/use-controlled-ref';
import { useControlledState } from '../../hooks/use-controlled-state';
import { Delay } from '../delay';
import { XIcon } from '../icon';
import { validateInput } from '../input/input';

import { AutoResizeTextareaProps, resizeTextarea } from '.';

import * as inputStyles from '../input/input.css';
import { textareaStyles } from './textarea.css';

export function Textarea({
  onValueChange,
  dispatchError,
  minHeight = 40,
  maxHeight = 400,
  isError,
  className,
  maxLength,
  ref,
  ...props
}: AutoResizeTextareaProps) {
  const [value, setValue] = useControlledState({
    prop: props.value,
    defaultProp: props.defaultValue || '',
    onChange: onValueChange,
  });
  const currentLength = value.length;
  const textareaRef = useControlledRef<HTMLTextAreaElement>(ref);

  useLayoutEffect(() => {
    resizeTextarea(textareaRef.current, minHeight, maxHeight);
  }, [textareaRef, minHeight, maxHeight]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onValueChange?.(event.target.value);
    setValue?.(event.target.value);
    resizeTextarea(textareaRef.current, minHeight, maxHeight);
  };

  const refresh = () => {
    if (textareaRef?.current) {
      const curr = textareaRef.current;
      curr.value = '';
      const validationResult = validateInput(curr);
      dispatchError?.(validationResult);
      setValue?.('');
      onValueChange?.('');
      resizeTextarea(textareaRef.current, minHeight, maxHeight);
    }
  };

  return (
    <div className={clsx(inputStyles.inputWrapper, className)}>
      <textarea
        ref={textareaRef}
        onChange={handleChange}
        className={clsx(textareaStyles, inputStyles.inputVariants.classNames.base, className)}
        style={{ minHeight, maxHeight }}
        maxLength={maxLength}
        {...props}
      />
      <Delay ms={0}>
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
      </Delay>
    </div>
  );
}

Textarea.displayName = 'Textarea';
