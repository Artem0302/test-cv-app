import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {IHero} from '@entities/heroes';

interface IFavoriteStore {
  favorites: IHero[];

  addFavorite: (value: IHero) => void;
  resetFavorites: () => void;
}

export const useFavoriteStore = create<IFavoriteStore>()(
  devtools(
    set => ({
      favorites: [],

      addFavorite: (value: IHero) =>
        set(state => ({favorites: [value, ...state.favorites]})),
      resetFavorites: () => set({favorites: []}),
    }),
    {name: 'favoriteStore'},
  ),
);
