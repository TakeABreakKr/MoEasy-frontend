/** 값 변경시 searchParams을 변경 */
export const onSearchValueChange = (key: string, searchParams: URLSearchParams) => (value: string | number) => {
  window.history.replaceState(
    null,
    '',
    '?' + createQueryString(searchParams, key, typeof value === 'number' ? String(value) : value),
  );
};

export const createQueryString = (searchParams: URLSearchParams, name?: string, value = '') => {
  const params = new URLSearchParams(searchParams.toString());
  if (name) {
    if (value) params.set(name, value);
    else params.delete(name);
  }

  return params.toString();
};
