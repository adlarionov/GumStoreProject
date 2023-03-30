import { create } from "zustand";

const useFavoriteStore = create((set) => ({
  favorite: 0,
  increaseFavorite: () => set((state) => ({ favorite: state.favorite + 1 })),
  decreaseFavorite: () => set((state) => ({ favorite: state.favorite - 1 })),
  removeAllFavorite: () => set({ favorite: 0 }),
}));

export default useFavoriteStore;
