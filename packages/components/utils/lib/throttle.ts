export const throttle = <T extends (...args: any[]) => any>(cb: T, delay = 300) => {
  let timer: NodeJS.Timeout | null;
  return (...args: Parameters<T>) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};
