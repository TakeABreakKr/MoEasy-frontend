'use client';

import { useCallback, useEffect, useReducer } from 'react';

type QueryState<T> = {
  data?: T;
  loading: boolean;
  error: Error | null;
  activateRefetch: boolean;
};

type QueryAction<T> =
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: T }
  | { type: 'FETCH_FAILURE'; payload: Error }
  | { type: 'FETCH_REFETCH' };

const queryReducer = <T>(state: QueryState<T>, action: QueryAction<T>): QueryState<T> => {
  switch (action.type) {
    case 'FETCH_INIT': {
      return { ...state, loading: true, error: null };
    }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: null, data: action.payload };
    case 'FETCH_FAILURE': {
      // 정상적인 data가 있는 경우 error를 저장하지 않는다.
      if (state.data && !state.loading) {
        return { ...state, loading: false, error: null };
      }
      return { ...state, loading: false, error: action.payload };
    }
    // 이전 상태를 모두 무효화하고 다시 fetch를 진행한다.
    case 'FETCH_REFETCH':
      return { data: undefined, loading: true, error: null, activateRefetch: !state.activateRefetch };
    default:
      throw new Error('Unhandled action type');
  }
};

const reducerInitializer = <T>(initialData?: T) => ({
  data: initialData,
  loading: false,
  error: null,
  activateRefetch: false,
});

export const useQuery = <T>({ queryURL, initData }: { queryURL: string; initData?: T }) => {
  const [{ data, loading, error, activateRefetch }, dispatch] = useReducer(
    queryReducer<T>,
    initData,
    reducerInitializer,
  );

  useEffect(() => {
    if (!queryURL) return;
    fetchData(queryURL);

    async function fetchData(url: string) {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const newData = (await response.json()) as T;
        dispatch({ type: 'FETCH_SUCCESS', payload: newData });
      } catch (e) {
        dispatch({ type: 'FETCH_FAILURE', payload: e as Error });
      }
    }
  }, [queryURL, activateRefetch]);

  return { data, loading, error, refetch: useCallback(() => dispatch({ type: 'FETCH_REFETCH' }), []) };
};
