export const delay = (timeout = 1000) => new Promise<void>((res) => setTimeout(res, timeout));
