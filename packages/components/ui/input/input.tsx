import { ComponentProps, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { contextCreator } from '../../utils/useSafeContext';
import { XIcon } from '../icon';

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
  minLength,
  isError = false,
  dispatchError,
  onValueChange,
  value: valueProps,
  defaultValue,
  children,
  ...props
}: InputProps<T>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [innerValue, setInnerValue] = useState<string | number>(defaultValue ?? '');
  const usedValue = valueProps ?? innerValue;
  const currentLength = typeof usedValue === 'string' ? usedValue.length : usedValue;

  useEffect(() => {
    if (valueProps !== undefined) {
      setInnerValue(valueProps);
    }
  }, [valueProps]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, valueAsNumber } = e.target;
    const newValue = props.type === 'number' && !isNaN(valueAsNumber) ? valueAsNumber : value;

    if (valueProps === undefined) {
      setInnerValue(newValue);
    }

    onValueChange?.(newValue as T);
    props.onChange?.(e);

    validateAndDispatchError(e.target);
  };

  const validateAndDispatchError = (target: HTMLInputElement) => {
    const validationResult = validateInput(target);
    dispatchError?.(validationResult);
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      setInnerValue('');
      onValueChange?.('' as T);
      validateAndDispatchError(inputRef.current);
    }
  };

  return (
    <InputProvider value={{ isError }}>
      <div className={clsx(inputWrapper, className)}>
        <input
          ref={inputRef}
          className={clsx(inputVariants({ error: isError }), className)}
          onKeyUp={(e) => {
            onKeyUp?.(e);
            if (!e.currentTarget.value) setInnerValue('');
            validateAndDispatchError(e.currentTarget);
          }}
          maxLength={maxLength}
          minLength={minLength}
          onChange={handleChange}
          value={usedValue}
          {...props}
        />
        <span className={inputCtlWrapper}>
          {currentLength !== 0 && (
            <button className={resetXIconStyles} onClick={handleClear}>
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
