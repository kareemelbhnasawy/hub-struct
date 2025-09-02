import { create } from 'zustand';
import ProfileState from './interface';
import { persist } from 'zustand/middleware';
import { getMMKVStorage } from '../mmkv-storage';
import { STORAGE_KEYS } from '@/constants/storageKeys';

const useProfileStore = create<ProfileState>()(
  persist(
    (set, get) => ({
      name: '',
      kunya: '',
      avatarUrl: '',
      bannerId: '',
      status: '',
      jobTitle: '',
      department: '',
      getFullName: () => ({ name: get().name, kunya: get().kunya }),
      getName: () => get().name,
      getKunya: () => get().kunya,
      getAvatarUrl: () => get().avatarUrl,
      getBannerId: () => get().bannerId,
      getStatus: () => get().status,
      getJobTitle: () => get().jobTitle,
      getDepartment: () => get().department,
      setName: (name) => set({ name }),
      setKunya: (kunya) => set({ kunya }),
      setFullName: (name, kunya) => set({ name, kunya }),
      setAvatarUrl: (url) => set({ avatarUrl: url }),
      setBannerId: (id) => set({ bannerId: id }),
      setStatus: (status) => set({ status }),
      setJobTitle: (title) => set({ jobTitle: title }),
      setDepartment: (department) => set({ department }),
    }),
    { name: STORAGE_KEYS.PROFILE_STORAGE, storage: getMMKVStorage<ProfileState>() },
  ),
);

export { useProfileStore };
