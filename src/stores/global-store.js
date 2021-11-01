import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useGlobal = create(
  devtools((set) => ({
    // Full Page Menu state
    isMenuOpen: false,
    setMenuOpen: (isMenuOpen) => set({ isMenuOpen })
  }))
);
