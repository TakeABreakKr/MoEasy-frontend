'use client';

import { Dispatch, SetStateAction, useCallback, useMemo, useSyncExternalStore } from 'react';

export function useLocalStorage<T>(key: string): [T | null, Dispatch<SetStateAction<T | null>>];
export function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>];
export function useLocalStorage<T>(key: string, initialValue?: T) {
  const rawData = useSyncExternalStore(
    storageSubscribeCallback,
    () => localStorage.getItem(key),
    () => JSON.stringify(initialValue),
  );

  const parsedData = useMemo<T | null>(() => (rawData ? JSON.parse(rawData) : null), [rawData]);
  const dispatchData = useCallback<Dispatch<SetStateAction<T | null>>>(
    (newValue) => {
      const valueToStore = newValue instanceof Function ? newValue(parsedData) : newValue;
      setLocalStorageData(key, valueToStore);
    },
    [key, parsedData],
  );

  return [parsedData, dispatchData] as const;
}

export function setLocalStorageData<T>(key: string, newValue: T) {
  try {
    window.localStorage.setItem(key, JSON.stringify(newValue));
    const event = new StorageEvent('storage', {
      key: key,
      newValue: JSON.stringify(newValue),
      storageArea: localStorage,
    });
    window.dispatchEvent(event);
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
  }
}

function storageSubscribeCallback(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('storage', callback);
  };
}
