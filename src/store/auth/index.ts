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
      accessToken: '',
      refreshToken: '',
      quickLoginType: '',
      biometricType: '',
      setEmail: (email) => set({ email }),
      getEmail: () => get().email,
      setPassword: (password) => set({ password }),
      getPassword: () => get().password,
      setLoginCredentials: (credentials) => set({ email: credentials.email, password: credentials.password }),  
      setUsername: (username) => set({ username }),
      getUsername: () => get().username,
      setAccessToken: (token) => set({ accessToken: token }),
      getAccessToken: () => get().accessToken,
      setRefreshToken: (token) => set({ refreshToken: token }),
      setTokens: (tokens) => set({ accessToken: tokens.accessToken, refreshToken: tokens.refreshToken }),
      getRefreshToken: () => get().refreshToken,
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
          accessToken: '',
          refreshToken: '',
          quickLoginType: '',
          biometricType: '',
        }),
      resetTokens: () => set({ accessToken: '', refreshToken: '' }),
      resetLoginCredentials: () => set({ email: '', password: '', username: '' }),
      resetStore: () =>
        set({
          email: '',
          password: '',
          username: '',
          accessToken: '',
          refreshToken: '',
          quickLoginType: '',
          biometricType: '',
        }),
      getLoginCredentials: () => ({
        email: get().email,
        password: get().password,
        username: get().username,
      }),
      getTokens: () => ({
        accessToken: get().accessToken,
        refreshToken: get().refreshToken,
      }),
    }),
    { name: STORAGE_KEYS.AUTH_STORAGE, storage: getMMKVStorage<AuthState>() },
  ),
);

export { useAuthStore };