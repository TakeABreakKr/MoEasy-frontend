export const isIdValid = (...ids: Array<string | null | undefined>) => {
  return ids?.some((id) => id?.startsWith('G-') && id.length === 18);
};

/**
 * 모든 퍼널에서 탈출하는 메서드
 */
export const escapePopup = () => window?.history.pushState({}, '', new URL(window?.location.href).pathname);

export const searchKeywordAction = (params: Partial<{ keyword: string }> = {}) => {
  const newRarams = new URLSearchParams(params);
  window?.history.pushState(null, '', `?${newRarams.toString()}`);
};
