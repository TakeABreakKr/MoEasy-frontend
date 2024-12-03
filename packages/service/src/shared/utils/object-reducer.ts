export const objectReducer = <T>(state: T, payload: Partial<T>) => ({ ...state, ...payload });
