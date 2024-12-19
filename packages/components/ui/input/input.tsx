'use client';

import { ComponentProps, useRef } from 'react';
import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { useControlledState } from '../../hooks/use-controlled-state';
import { contextCreator } from '../../utils/useSafeContext';
import { Delay } from '../delay';
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
} & Omit<ComponentProps<'input'>, 'value' | 'defaultValue'> &
  RecipeVariants<typeof inputVariants>;

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
  plain,
  ...props
}: InputProps<T>) => {
  const parsedDefault = defaultValue ?? ((props.type === 'number' ? (props.min ?? 0) : '') as T);
  const inputRef = useRef<HTMLInputElement>(null);
  const [innerValue, setInnerValue] = useControlledState<T>({
    prop: valueProps,
    defaultProp: parsedDefault,
    onChange: onValueChange,
  });
  const currentLength = typeof innerValue === 'string' ? innerValue.length : null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, valueAsNumber } = e.target;
    const newValue = props.type === 'number' && !isNaN(valueAsNumber) ? valueAsNumber : value;

    setInnerValue?.(newValue as T);
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
      setInnerValue(parsedDefault);
      onValueChange?.(parsedDefault);
      validateAndDispatchError(inputRef.current);
    }
  };

  return (
    <InputProvider value={{ isError }}>
      <div className={clsx(inputWrapper, className)}>
        <input
          ref={inputRef}
          className={clsx(inputVariants({ error: isError, plain }), className)}
          onKeyUp={(e) => {
            onKeyUp?.(e);
            validateAndDispatchError(e.currentTarget);
          }}
          maxLength={maxLength}
          minLength={minLength}
          onChange={handleChange}
          value={innerValue}
          {...props}
        />
        <div className={inputCtlWrapper}>
          <Delay ms={0}>
            {currentLength ? (
              <button className={resetXIconStyles} onClick={handleClear}>
                <XIcon color="#fff" />
              </button>
            ) : null}
            {props.type !== 'number' && typeof currentLength == 'number' && maxLength && (
              <span>
                <span className={clsx(currentLength === 0 ? ctlTextMax : isError && errorTextColor)}>
                  {currentLength <= maxLength ? currentLength : maxLength}
                </span>
                <span className={ctlTextMax}>/{maxLength}</span>
              </span>
            )}
          </Delay>
        </div>
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
