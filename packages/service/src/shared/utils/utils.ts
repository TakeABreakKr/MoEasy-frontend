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
