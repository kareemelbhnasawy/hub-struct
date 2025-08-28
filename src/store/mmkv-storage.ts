import { deleteKey, getItem, setItem } from '@/utilities';
import type { PersistStorage } from 'zustand/middleware';

// To be only used to persist stores
// Please do not use this for setting local storage keys
export const getMMKVStorage = <T>(): PersistStorage<T> => ({
  setItem: (name, value) => setItem(name, value),
  getItem: (name) => getItem(name) ?? null,
  removeItem: (name) => deleteKey(name),
});
