import { MMKV } from 'react-native-mmkv';
import { Platform } from 'react-native';

let storage: MMKV | null = null;

try {
  if (Platform.OS !== 'web') {
    storage = new MMKV();
  }
} catch (error) {
  console.warn('MMKV storage initialization failed:', error);
}

export const getStorageString = (key: string) => {
  try {
    if (!storage) return null;
    const value = storage.getString(key);
    return value;
  } catch (error) {
    console.warn(`Failed to get item ${key}:`, error);
    return null;
  }
};

export const setStorageString = (key: string, value: string) => {
  try {
    if (!storage) return;
    storage.set(key, value);
  } catch (error) {
    console.warn(`Failed to set item ${key}:`, error);
  }
};

export const getStorageItem = (key: string) => {
  try {
    if (!storage) return null;
    const value = storage.getString(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.warn(`Failed to get item ${key}:`, error);
    return null;
  }
};

export const setStorageItem = (key: string, value: unknown) => {
  try {
    if (!storage) return;
    storage.set(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Failed to set item ${key}:`, error);
  }
};

export const deleteKey = (key: string) => {
  try {
    if (!storage) return;
    storage.delete(key);
  } catch (error) {
    console.warn(`Failed to delete item ${key}:`, error);
  }
};
