import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getMMKVStorage } from '../mmkv-storage';

export interface BearState {
  bears: number;
  increase: (by: number) => void;
}

// CHECK THIS DANIEL

const useBearStore = create<BearState>()(
  persist(
    (set) => ({
      bears: 0,
      increase: (by) => set((state) => ({ bears: state.bears + by })),
    }),
    { name: 'bearStore', storage: getMMKVStorage<BearState>() },
  ),
);

export { useBearStore };
