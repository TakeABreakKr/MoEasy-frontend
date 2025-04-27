export type URL_ORIGIN_TYPE = 'SERVER' | 'BROWSER';

export const getMockBaseUrl = (origin: URL_ORIGIN_TYPE) => {
  if (origin === 'SERVER') {
    return process.env.NEXT_PUBLIC_API_BASE_SERVER || '';
  }
  return process.env.NEXT_PUBLIC_API_BASE_BROWSER || '';
};
