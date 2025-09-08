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
      userId: '',
      quickLoginType: '',
      invalidAttemptCount: 0,
      isAccountSuspended: false,
      setIsAccountSuspended: (value) => set({ isAccountSuspended: value }),
      incrementInvalidAttemptCount: () =>
        set((state) => ({
          invalidAttemptCount: state.invalidAttemptCount + 1,
        })),
      getInvalidAttemptCount: () => get().invalidAttemptCount,
      setEmail: (email) => set({ email }),
      getEmail: () => get().email,
      setPassword: (password) => set({ password }),
      getPassword: () => get().password,
      getUserId: () => get().userId,
      setUserId: (id: string) => set({ userId: id }),
      setLoginCredentials: (credentials) =>
        set({ email: credentials.email, password: credentials.password }),
      setQuickLoginType: (quickLoginType) => set({ quickLoginType }),
      getQuickLoginType: () => get().quickLoginType,
      resetAllUserData: () =>
        set({
          email: '',
          password: '',
          quickLoginType: '',
        }),
      resetLoginCredentials: () => set({ email: '', password: '' }),
      resetStore: () =>
        set({
          email: '',
          password: '',
          quickLoginType: '',
          invalidAttemptCount: 0,
        }),
      getLoginCredentials: () => ({
        email: get().email,
        password: get().password,
      }),
    }),
    { name: STORAGE_KEYS.AUTH_STORAGE, storage: getMMKVStorage<AuthState>() },
  ),
);

export { useAuthStore };
