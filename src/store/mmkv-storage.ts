import { getString, setString, deleteKey } from '@/utilities';
import type { StateStorage } from 'zustand/middleware';

export const zustandMMKVStorage: StateStorage = {
  setItem: (name, value) => setString(name, value),
  getItem: (name) => getString(name) ?? null,
  removeItem: (name) => deleteKey(name),
};
