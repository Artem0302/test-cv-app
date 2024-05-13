import {IHero} from '@entities/heroes';

export interface IGetHeroResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IHero[];
}
