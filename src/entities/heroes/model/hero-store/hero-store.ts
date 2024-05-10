import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {IHero} from '@entities/heroes';

interface IHeroStore {
  heroes: IHero[];

  setHeroes: (value: IHero[]) => void;
}

export const useHeroesStore = create<IHeroStore>()(
  devtools(
    set => ({
      heroes: [],

      setHeroes: (value: IHero[]) => set({heroes: value}),
    }),
    {name: 'heroesStore'},
  ),
);
