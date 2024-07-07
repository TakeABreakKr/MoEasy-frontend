import { ComponentProps, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { XIcon } from '@/icon';
import { contextCreator } from '@/utils/useSafeContext';

import styles from './input.module.css';

export type InputProps = {
  isError?: boolean;
  dispatchError?: (isError: boolean) => void;
  className?: string;
  onValueChange?: (value: string | number) => void;
} & ComponentProps<'input'>;

export type InputCtxType = {
  isError?: boolean;
  dispatchError?: (isError: boolean) => void;
  className?: string;
  currentLength?: number;
} & Omit<ComponentProps<'input'>, 'children'>;

const [InputProvider, useInputContext] = contextCreator<InputCtxType>();

export const validateInput = ({
  type,
  minLength = -1,
  maxLength = -1,
  min,
  max,
  pattern,
  value,
}: {
  type: 'number' | {};
  minLength?: number;
  maxLength?: number;
  min?: number | string;
  max?: number | string;
  pattern?: string;
  value?: string | number | readonly string[];
}) => {
  console.log(minLength, maxLength, min, max);
  // length validation
  if (type !== 'number') {
    const textValue = String(value);
    if (minLength > 0 && textValue.length < minLength) return true;
    if (maxLength > 0 && textValue.length > maxLength) return true;
  }
  if (type === 'number') {
    const valueAsNumber = Number(value);
    if (valueAsNumber < Number(min)) return true;
    if (valueAsNumber > Number(max)) return true;
  }

  // pattern validation
  if (pattern && !String(value).match(new RegExp(`^${pattern}$`))) return true;
  return false;
};

export const Input = ({
  className,
  onKeyUp,
  maxLength,
  isError = false,
  dispatchError,
  onValueChange,
  children,
  ...props
}: InputProps) => {
  const { value, defaultValue } = props;
  const initValueState = typeof value === 'number' ? value : value?.length || 0;
  const initDefaultValue = typeof defaultValue === 'number' ? defaultValue : defaultValue?.length || 0;

  const inputRef = useRef<HTMLInputElement>(null);
  const [currentLength, setLength] = useState(initValueState || initDefaultValue || 0);
  const [error, setError] = useState(isError);
  useEffect(() => dispatchError && dispatchError(error)), [error, dispatchError];

  return (
    <InputProvider value={{ ...props, isError: error, currentLength }}>
      <div className={styles.wrapper}>
        <input
          ref={inputRef}
          className={clsx(styles.input, error && styles.error, className)}
          onKeyUp={(e) => {
            if (onKeyUp) onKeyUp(e);
            const { value } = e.currentTarget;
            if (onValueChange) onValueChange(value);
            setLength(value.length);
            const validationResult = validateInput(e.currentTarget);
            setError(validationResult);
            dispatchError && dispatchError(validationResult);
          }}
          maxLength={maxLength}
          onChange={(e) => {
            if (props.onChange) props.onChange(e);
            const { value } = e.currentTarget;
            if (onValueChange) onValueChange(value);
            setLength(value.length);
            const validationResult = validateInput(e.currentTarget);
            setError(validationResult);
            dispatchError && dispatchError(validationResult);
          }}
          {...props}
        />
        <span className={styles.span}>
          {currentLength !== 0 && (
            <button
              className={styles.x}
              onClick={() => {
                if (inputRef?.current) {
                  inputRef.current.value = '';
                  const validationResult = validateInput(inputRef.current);
                  setError(validationResult);
                  dispatchError && dispatchError(validationResult);
                  setLength(0);
                  if (onValueChange) onValueChange('');
                }
              }}
            >
              <XIcon color="#fff" />
            </button>
          )}
          {maxLength && (
            <span>
              <span
                className={clsx(styles['current-text'], error && styles.error, currentLength === 0 && styles.empty)}
              >
                {currentLength <= maxLength ? currentLength : maxLength}
              </span>
              <span className={styles['text-max']}>/{maxLength}</span>
            </span>
          )}
        </span>
      </div>
      {children}
    </InputProvider>
  );
};

type InputMessageProps = {
  message?: string;
  errorMessage?: React.ReactNode;
} & ComponentProps<'span'>;

export const InputMessage = ({ className, children, errorMessage, ...props }: InputMessageProps) => {
  const ctx = useInputContext();
  return (
    <span className={className ?? clsx(styles['label-default'], ctx.isError && styles.error)} {...props}>
      {ctx.isError ? errorMessage : children}
    </span>
  );
};
