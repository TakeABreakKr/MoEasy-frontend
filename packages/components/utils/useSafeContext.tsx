import { Context, createContext, useContext } from 'react';

export const nullSymbol = Symbol('null');

export type NullableContextType<T> = T | typeof nullSymbol;

export const useSafeContext = <T,>(
  Ctx: Context<NullableContextType<T>>,
  customMessage?: string | ((displayName?: string) => string),
): T => {
  const context = useContext(Ctx);
  if (context === nullSymbol) {
    const displayName = Ctx.displayName || 'context';
    let errorMsg: string;
    if (typeof customMessage === 'string') {
      errorMsg = customMessage;
    } else if (customMessage instanceof Function) {
      errorMsg = customMessage(displayName);
    } else {
      errorMsg = `${displayName}의 Provider 밖에서 사용하고 있습니다.`;
    }
    throw new Error(errorMsg);
  }
  return context;
};

export const contextCreator = <CtxType,>() => {
  const Context = createContext<NullableContextType<CtxType>>(nullSymbol);
  const useCtx = () => useSafeContext(Context);
  return [Context.Provider, useCtx] as const;
};
