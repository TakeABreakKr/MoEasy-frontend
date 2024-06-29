import { type ReadonlyURLSearchParams } from 'next/navigation';

export const returnValueOnCondition = <T>(value: T, condition?: unknown) => {
  if (condition) {
    return value;
  } else {
    return undefined;
  }
};

export const createQueryString = (searchParams: ReadonlyURLSearchParams, name?: string, value?: string) => {
  const params = new URLSearchParams(searchParams.toString());
  if (name && value) params.set(name, value);

  return params.toString();
};
