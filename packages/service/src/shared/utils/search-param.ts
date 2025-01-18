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

const groupParamsByKey = (params: URLSearchParams) =>
  [...params.entries()].reduce<Record<string, string | string[]>>((acc, tuple) => {
    // getting the key and value from each tuple
    const [key, val] = tuple;
    if (acc.hasOwnProperty(key)) {
      // if the current key is already an array, we'll add the value to it
      if (Array.isArray(acc[key])) {
        acc[key] = [...acc[key], val];
      } else {
        // if it's not an array, but contains a value, we'll convert it into an array
        // and add the current value to it
        acc[key] = [acc[key], val];
      }
    } else {
      // plain assignment if no special case is present
      acc[key] = val;
    }

    return acc;
  }, {});

/**
 * searchParams에 새로운 값을 추가하거나 변경한뒤 페이지 이동
 * @param params 새로 주입할 searchParam을 객체 형태로 전달
 * @param searchParams 기존에 유지할 searchParam
 */
export const pushSearchParams = <T extends Record<string, string | null | string[]>>(
  params: Partial<T> = {},
  searchParams?: URLSearchParams,
) => {
  const searchParamsObject = searchParams ? { ...groupParamsByKey(searchParams), ...params } : params;
  const newParams = new URLSearchParams();
  for (const [key, values] of Object.entries(searchParamsObject)) {
    if (Array.isArray(values)) {
      values.forEach((value) => newParams.append(key, value));
    } else if (values) {
      newParams.append(key, values);
    }
  }
  window?.history.pushState(null, '', `?${newParams.toString()}`);
};
