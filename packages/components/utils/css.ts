/**
 * px 수치를 rem으로 치환하는 함수
 */
/**
 * px 수치를 rem으로 치환하는 함수
 *
 * @param value - px 값 또는 rem 값을 나타내는 문자열이나 숫자
 * @returns 변환된 rem 값 문자열
 */
export const rem = (...values: Array<string | number>) =>
  values
    .map((value) => {
      if (typeof value === 'string') {
        if (value.trim() === '') return '0rem';

        const lowerCaseValue = value.trim().toLowerCase();

        if (lowerCaseValue.endsWith('px')) {
          const parsedPx = parseFloat(lowerCaseValue.slice(0, -2));
          if (isNaN(parsedPx)) return '0rem';
          return `${parsedPx / 16}rem`;
        }

        if (lowerCaseValue.endsWith('rem')) {
          const parsedRem = parseFloat(lowerCaseValue.slice(0, -3));
          if (isNaN(parsedRem)) return '0rem';
          return lowerCaseValue;
        }

        const parsedValue = parseFloat(lowerCaseValue);
        if (isNaN(parsedValue)) return '0rem';
        return `${parsedValue / 16}rem`;
      }
      return `${value / 16}rem`;
    })
    .join(' ');
