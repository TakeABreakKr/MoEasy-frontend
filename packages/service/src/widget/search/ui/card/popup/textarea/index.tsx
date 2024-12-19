import React, { ChangeEvent, useLayoutEffect, useRef } from 'react';
import clsx from 'clsx';

import { useControlledState } from '@moeasy/storybook/hooks/use-controlled-state';
import { Delay } from '@moeasy/storybook/ui/delay';
import * as inputStyles from '@moeasy/storybook/ui/input/input.css';
import { AutoResizeTextareaProps, resizeTextarea } from '@moeasy/storybook/ui/textarea';

import * as textareaStyles from './textarea.css';

export const MeetingJoinTextarea = ({
  onValueChange,
  dispatchError,
  minHeight = 40,
  maxHeight = 400,
  isError,
  className,
  maxLength,
  ...props
}: AutoResizeTextareaProps) => {
  const [value, setValue] = useControlledState({
    prop: props.value,
    defaultProp: props.defaultValue || '',
    onChange: onValueChange,
  });
  const currentLength = value.length;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    resizeTextarea(textareaRef.current, minHeight, maxHeight);
  }, [textareaRef, minHeight, maxHeight]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onValueChange?.(event.target.value);
    setValue?.(event.target.value);
    resizeTextarea(textareaRef.current, minHeight, maxHeight);
  };

  return (
    <div
      className={clsx(
        textareaStyles.textareaWrapper,
        inputStyles.inputWrapper,
        inputStyles.inputVariants.classNames.base,
        className,
      )}
      onClick={(e) => {
        e.preventDefault();
        textareaRef.current?.focus();
      }}
    >
      <Delay ms={0}>
        {maxLength && (
          <div className={textareaStyles.textLengthWrapper}>
            <span className={clsx(inputStyles.ctlTextMax)}>
              {currentLength <= maxLength ? currentLength : maxLength}
            </span>
            <span className={inputStyles.ctlTextMax}>/{maxLength}</span>
          </div>
        )}
      </Delay>
      <textarea
        ref={textareaRef}
        onChange={handleChange}
        className={textareaStyles.transparentTextArea}
        style={{ minHeight, maxHeight }}
        maxLength={maxLength}
        {...props}
      />
    </div>
  );
};
