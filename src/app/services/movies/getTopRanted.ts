import { tmdb } from '@/app/api/tmdb'

export async function getTopRanted() {
  const response = await tmdb.get('/movie/top_rated')
  return response.data.results
}
