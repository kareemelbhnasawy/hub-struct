import { deleteKey, setItem, getItem } from '@/utilities';
import type { PersistStorage } from 'zustand/middleware';

// Generic factory function
export const getMMKVStorage = <T>(): PersistStorage<T> => ({
  setItem: (name, value) => setItem(name, value),
  getItem: (name) => getItem(name) ?? null,
  removeItem: (name) => deleteKey(name),
});
