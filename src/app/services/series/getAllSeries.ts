import { tmdb } from '@/app/api/tmdb'

import type { ISeriesResponse } from '@/app/types/SeriesResponse'

export async function getAllSeries(pageParam = 1, selectedGenreId?: string) {
  const response = await tmdb.get<Promise<ISeriesResponse>>('/discover/tv', {
    params: {
      page: pageParam,
      with_genres: selectedGenreId,
      sorty_by: 'popularity.desc',
    },
  })
  return response.data
}
