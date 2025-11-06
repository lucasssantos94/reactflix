import { tmdb } from '@/app/api/tmdb'

export async function getTrendingWeekMovies() {
  const response = await tmdb.get('/trending/movie/week')
  return response.data.results
}
