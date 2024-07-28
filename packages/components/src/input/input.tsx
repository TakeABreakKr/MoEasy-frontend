import { ComponentProps, useRef, useState } from 'react';
import clsx from 'clsx';

import { XIcon } from '../icon';
import { contextCreator } from '../utils/useSafeContext';

import {
  ctlTextMax,
  ctxLabelStyle,
  errorTextColor,
  inputCtlWrapper,
  inputVariants,
  inputWrapper,
  resetXIconStyles,
} from './input.css';

export type InputProps<T extends string | number> = {
  value?: T;
  defaultValue?: T;
  onValueChange?: (value: T) => void;
  isError?: boolean;
  dispatchError?: (isError: boolean) => void;
} & Omit<ComponentProps<'input'>, 'value' | 'defaultValue'>;

export type InputCtxType = {
  isError?: boolean;
};

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

export const Input = <T extends string | number>({
  className,
  onKeyUp,
  maxLength,
  isError = false,
  dispatchError,
  onValueChange,
  children,
  ...props
}: InputProps<T>) => {
  const { value, defaultValue } = props;
  const initValuelength = typeof value === 'number' ? value : value?.length;
  const initDefaultValueLength = typeof defaultValue === 'number' ? defaultValue : defaultValue?.length;

  const inputRef = useRef<HTMLInputElement>(null);
  const [currentLength, setLength] = useState(initValuelength || initDefaultValueLength || 0);

  return (
    <InputProvider value={{ isError }}>
      <div className={clsx(inputWrapper, className)}>
        <input
          ref={inputRef}
          className={clsx(inputVariants({ error: isError }), className)}
          onKeyUp={(e) => {
            if (onKeyUp) onKeyUp(e);
            setLength(e.currentTarget.value.length);
            const validationResult = validateInput(e.currentTarget);
            dispatchError && dispatchError(validationResult);
          }}
          maxLength={maxLength}
          onChange={(e) => {
            if (props.onChange) props.onChange(e);
            const { value, valueAsNumber } = e.currentTarget;
            if (onValueChange) onValueChange((isNaN(valueAsNumber) ? value : valueAsNumber) as T);
            setLength(value.length);
            const validationResult = validateInput(e.currentTarget);
            dispatchError && dispatchError(validationResult);
          }}
          {...props}
        />
        <span className={inputCtlWrapper}>
          {currentLength !== 0 && (
            <button
              className={resetXIconStyles}
              onClick={() => {
                if (inputRef?.current) {
                  inputRef.current.value = '';
                  const { value, valueAsNumber } = inputRef.current;
                  const validationResult = validateInput(inputRef.current);
                  dispatchError && dispatchError(validationResult);
                  setLength(0);
                  if (onValueChange) onValueChange((isNaN(valueAsNumber) ? value : valueAsNumber) as T);
                }
              }}
            >
              <XIcon color="#fff" />
            </button>
          )}
          {maxLength && (
            <span>
              <span className={clsx(currentLength === 0 ? ctlTextMax : isError && errorTextColor)}>
                {currentLength <= maxLength ? currentLength : maxLength}
              </span>
              <span className={ctlTextMax}>/{maxLength}</span>
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
    <span className={className ?? clsx(ctxLabelStyle, ctx.isError && errorTextColor)} {...props}>
      {ctx.isError ? errorMessage : children}
    </span>
  );
};
