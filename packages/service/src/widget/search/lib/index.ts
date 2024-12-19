export const isIdValid = (...ids: Array<string | null | undefined>) => {
  return ids?.some((id) => id?.startsWith('G-') && id.length === 18);
};

/**
 * 모든 퍼널에서 탈출하는 메서드
 */
export const escapePopup = () => window?.history.pushState({}, '', new URL(window?.location.href).pathname);

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
 * @param params 새로 주입할 searchParam을 객체 형태로 전달
 * @param searchParams 기존에 유지할 searchParam
 */
export const searchKeywordAction = <T extends Record<string, string | null | string[]>>(
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
