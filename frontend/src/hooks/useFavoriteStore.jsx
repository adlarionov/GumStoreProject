import { create } from "zustand";

/**
 * useFavoriteStore - компонент для хранения информации о избранном
 * @module hooks/useFavoriteStore
 * @method
 * @param {function} set - функция для установки значения
 * @returns {number} favorite - состояние
 * @example
 * // returns amount of favorite
 * const [favorite, setFavorite] = useFavoriteStore((state) => [state.favorite, setFavorite]);
 */
const useFavoriteStore = create((set) => ({
  favorite: 0,
  increaseFavorite: () => set((state) => ({ favorite: state.favorite + 1 })),
  decreaseFavorite: () => set((state) => ({ favorite: state.favorite - 1 })),
  removeAllFavorite: () => set({ favorite: 0 }),
}));

export default useFavoriteStore;
