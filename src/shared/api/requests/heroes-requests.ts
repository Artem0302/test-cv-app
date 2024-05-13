import {IGetHeroResponse, instance} from '@shared/api';

interface IGetHeroesRequest {
  page?: number;
}

export async function getHeroesRequest({page = 1}: IGetHeroesRequest) {
  const response = await instance.get<IGetHeroResponse>(
    `/people/?page=${page}`,
  );

  return response.data;
}
