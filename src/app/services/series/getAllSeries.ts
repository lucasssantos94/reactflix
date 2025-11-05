import { tmdb } from '@/app/api/tmdb'

import type { ISeriesResponse } from '@/app/types/SeriesResponse'

export async function getAllSeries(pageParam = 1) {
  const response = await tmdb.get<Promise<ISeriesResponse>>('/tv/popular', {
    params: {
      page: pageParam,
    },
  })
  return response.data
}
