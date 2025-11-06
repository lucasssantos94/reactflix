import { tmdb } from '@/app/api/tmdb'

export async function getTrendingTodayMovies() {
  const response = await tmdb.get('/trending/movie/day')
  return response.data.results
}
