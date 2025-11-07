import { tmdb } from '@/app/api/tmdb'
import type { IMoviesResponse } from '@/app/types/MoviesResponse'

export async function getAllMovies(pageParam = 1, selectedGenreId?: string) {
  const response = await tmdb.get<Promise<IMoviesResponse>>('/discover/movie', {
    params: {
      page: pageParam,
      with_genres: selectedGenreId,
      sorty_by: 'popularity.desc',
    },
  })

  return response.data
}
