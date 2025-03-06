'use client';
import { useSyncExternalStore } from 'react';

const hashStore = {
  get: () => (typeof window !== 'undefined' ? decodeURIComponent(window.location.hash.replace('#', '')) : undefined),
  subscribe: (callback: () => void) => {
    window.addEventListener('hashchange', callback);
    return () => window.removeEventListener('hashchange', callback);
  },
};

export const useHash = (defaultValue = '') =>
  useSyncExternalStore(hashStore.subscribe, hashStore.get, hashStore.get) ?? defaultValue;
