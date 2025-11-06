import { tmdb } from '@/app/api/tmdb'

export async function getPopularSeries() {
  const response = await tmdb.get('/tv/popular')
  return response.data.results
}
