import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const getString = (key: string) => storage.getString(key);
export const setString = (key: string, value: string) =>
  storage.set(key, value);
export const deleteKey = (key: string) => storage.delete(key);

export const setItem = <T>(key: string, value: T) =>
  storage.set(key, JSON.stringify(value));
export const getItem = <T>(key: string) => {
  const tempItem = storage.getString(key);
  if (tempItem) return JSON.parse(tempItem) as T;
  return undefined;
};
