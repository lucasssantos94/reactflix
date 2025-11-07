import { tmdb } from '@/app/api/tmdb'

export async function getSeriesGenres() {
  const response = await tmdb.get('/genre/tv/list')
  console.log(response.data)
  return response.data.genres
}
