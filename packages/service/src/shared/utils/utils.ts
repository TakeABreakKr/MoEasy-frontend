export const returnValueOnCondition = <T>(value: T, condition?: unknown) => {
  if (condition) {
    return value;
  } else {
    return undefined;
  }
};

export const createQueryString = (searchParams: URLSearchParams, name?: string, value = '') => {
  const params = new URLSearchParams(searchParams.toString());
  if (name) {
    if (value) params.set(name, value);
    else params.delete(name);
  }

  return params.toString();
};

type ParserCommonType = {
  required?: boolean;
  /** true인 경우 강제로 형변환을 진행시킨다. */
  toBe?: boolean;
};

export const stringParser = (
  value: unknown,
  options: { maxLength?: number; minLength?: number } & ParserCommonType = {},
) => {
  const { minLength, maxLength, required, toBe } = options;
  if (required && isNotDefined(value)) throw new Error('value is not defined');
  if (toBe) {
    value = String(value);
  }
  if (typeof value !== 'string') throw new Error('value is not string');
  if (typeof minLength === 'number' && value.length < minLength)
    throw new Error(`value length is smaller than ${minLength}`);
  if (typeof maxLength === 'number' && value.length > maxLength)
    throw new Error(`value length is larger than ${maxLength}`);
  return value;
};

export const numberParser = (value: unknown, options: { max?: number; min?: number } & ParserCommonType = {}) => {
  const { min, max, required, toBe } = options;
  if (required && isNotDefined(value)) throw new Error('value is not defined');
  if (toBe) {
    value = Number(value);
  }
  if (typeof value !== 'number') throw new Error('value is not number');
  if (typeof min === 'number' && value < min) throw new Error(`value is smaller than ${min}`);
  if (typeof max === 'number' && value > max) throw new Error(`value is larger than ${max}`);
  return value;
};

export const fileParser = (value: unknown, options: { size?: number } & ParserCommonType = {}) => {
  const { size, required } = options;
  if (required && isNotDefined(value)) throw new Error('value is not defined');
  if (!(value instanceof File)) throw new Error('value is not a file');
  if (typeof size === 'number' && value.size > size) throw new Error(`file size is larger than ${size}`);
  return value;
};

export const isNotDefined = (value: unknown) => {
  if (typeof value === 'undefined' || value === null) return true;
  return false;
};
