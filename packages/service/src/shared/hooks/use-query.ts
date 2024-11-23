'use client';

import { useEffect, useReducer, useState } from 'react';

export const useQuery = <T>({ queryURL }: { queryURL: string }) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [activateRefetch, refetch] = useReducer((e) => !e, false);
  useEffect(() => {
    if (!queryURL) return;

    setloading(true);
    setError(null);
    fetchData(queryURL);

    async function fetchData(url: string) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const newData = (await response.json()) as T;
        setData(newData);
      } catch (e) {
        setError(e as Error);
      } finally {
        setloading(false);
      }
    }
  }, [queryURL, activateRefetch]);

  return { data, loading, error, refetch };
};
