import { tmdb } from '@/app/api/tmdb'

export async function getSeriesGenres() {
  const response = await tmdb.get('/genre/tv/list')
  return response.data.genres
}
