export const copyText = async (value: ShareData) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(value.text || '');
  } else {
    const _dummy = document.createElement('textarea');
    _dummy.value = value.text || '';
    document.body.appendChild(_dummy);
    _dummy.select();
    document.execCommand('copy');
    document.body.removeChild(_dummy);
  }
};
