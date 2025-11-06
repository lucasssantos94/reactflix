import { tmdb } from '@app/api/tmdb'

export async function getMoviesGenres() {
  const response = await tmdb.get('/genre/movie/list')

  return response.data.genres
}
