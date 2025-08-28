import { create } from 'zustand';
import AuthState from './interface';
import { persist } from 'zustand/middleware';
import { getMMKVStorage } from '../mmkv-storage';
import { STORAGE_KEYS } from '@/constants/storageKeys';

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      email: '',
      password: '',
      username: '',
      quickLoginType: '',
      biometricType: '',
      invalidAttemptCount: 0,
      isAccountSuspended: false,
      setIsAccountSuspended: (value) => set({ isAccountSuspended: value }),
      incrementInvalidAttemptCount: () => set((state) => ({ invalidAttemptCount: state.invalidAttemptCount + 1 })),
      getInvalidAttemptCount: () => get().invalidAttemptCount,
      setEmail: (email) => set({ email }),
      getEmail: () => get().email,
      setPassword: (password) => set({ password }),
      getPassword: () => get().password,
      setLoginCredentials: (credentials) => set({ email: credentials.email, password: credentials.password }),  
      setUsername: (username) => set({ username }),
      getUsername: () => get().username,
      setQuickLoginType: (quickLoginType) => set({ quickLoginType }),
      getQuickLoginType: () => get().quickLoginType,
      setBiometricType: (biometricType) => set({ biometricType }),
      getBiometricType: () => get().biometricType,
      resetAllCredentials: () => set({ email: '', password: '', username: '' }),
      resetAllUserData: () =>
        set({
          email: '',
          password: '',
          username: '',
          quickLoginType: '',
          biometricType: '',
        }),
      resetLoginCredentials: () => set({ email: '', password: '', username: '' }),
      resetStore: () =>
        set({
          email: '',
          password: '',
          username: '',
          quickLoginType: '',
          biometricType: '',
          invalidAttemptCount: 0,
        }),
      getLoginCredentials: () => ({
        email: get().email,
        password: get().password,
        username: get().username,
      }),
    }),
    { name: STORAGE_KEYS.AUTH_STORAGE, storage: getMMKVStorage<AuthState>() },
  ),
);

export { useAuthStore };