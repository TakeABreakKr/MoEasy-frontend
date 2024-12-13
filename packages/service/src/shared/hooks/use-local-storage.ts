'use client';

import React from 'react';

/**
 * 지정된 로컬 스토리지의 키에 저장된 값을 객체형태로 사용가능한 커스텀 훅을 생산하는 함수
 * @param key 로컬 스토리지의 키
 */
export function createUseLocalStorage<T>(
  key: string,
): () => [T | null, React.Dispatch<React.SetStateAction<T | null>>, () => void];
export function createUseLocalStorage<T>(
  key: string,
  initialValue: T,
): () => [T, React.Dispatch<React.SetStateAction<T>>, () => void];
export function createUseLocalStorage<T>(key: string, initialValue?: T) {
  const stringifiedValue = initialValue ? JSON.stringify(initialValue) : null;
  const getSnapshot = () => window.localStorage.getItem(key) ?? stringifiedValue;
  const getServerSnapshot = () => stringifiedValue;
  const setSelectedKeyData = (value: T | null) => setLocalStorageData(key, value);
  const removeData = () => (initialValue ? setLocalStorageData(key, initialValue) : removeStorage(key));

  return function useLocalStorage() {
    const value = React.useSyncExternalStore(storageSubscribeCallback, getSnapshot, getServerSnapshot);
    const parsedData = React.useMemo<T | null>(() => (value ? JSON.parse(value) : null), [value]);
    const dispatchData = React.useCallback<React.Dispatch<React.SetStateAction<T | null>>>(
      (newValue) => {
        const valueToStore = newValue instanceof Function ? newValue(parsedData) : newValue;
        setSelectedKeyData(valueToStore);
      },
      [parsedData],
    );
    return [parsedData, dispatchData, removeData] as const;
  };
}

/**
 * 지정된 로컬 스토리지의 키에 저장된 값을 문자 형태로 사용가능한 커스텀 훅을 생산하는 함수. createUseLocalStorage의 경량화 버전
 * @param key 로컬 스토리지의 키
 */
export function createUseStringLocalStorage<T extends string>(
  key: string,
): () => [T | null, React.Dispatch<React.SetStateAction<T | null>>, () => void];
export function createUseStringLocalStorage<T extends string>(
  key: string,
  initialValue: T,
): () => [T, React.Dispatch<React.SetStateAction<T>>, () => void];
export function createUseStringLocalStorage<T extends string>(key: string, initialValue?: T) {
  const stringInitialValue = initialValue ?? null;
  const getSnapshot = () => (window.localStorage.getItem(key) ?? stringInitialValue) as T;
  const dispatchData = (newValue: React.Dispatch<React.SetStateAction<T>>) => {
    const valueToStore = newValue instanceof Function ? newValue(getSnapshot()) : newValue;
    setLocalStorageData(key, valueToStore);
  };
  const getServerSnapshot = () => stringInitialValue;
  const removeData = () => (initialValue ? setLocalStorageData(key, initialValue) : removeStorage(key));
  return function useStringLocalStorage() {
    const value = React.useSyncExternalStore(storageSubscribeCallback, getSnapshot, getServerSnapshot);
    return [value, dispatchData, removeData] as const;
  };
}

export function setLocalStorageData<T>(key: string, newValue: T) {
  try {
    const parsedValue = typeof newValue === 'string' ? newValue : JSON.stringify(newValue);
    window.localStorage.setItem(key, parsedValue);
    const event = new StorageEvent('storage', {
      key: key,
      newValue: parsedValue,
      storageArea: localStorage,
    });
    window.dispatchEvent(event);
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
  }
}

function removeStorage(key: string) {
  window.localStorage.removeItem(key);
  dispatchEvent(new StorageEvent('storage', { key }));
}

function storageSubscribeCallback(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('storage', callback);
  };
}
