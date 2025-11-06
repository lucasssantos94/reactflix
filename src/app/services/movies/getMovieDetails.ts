import { tmdb } from '@/app/api/tmdb'

export async function getMovieDetails(movieId: string) {
  const response = await tmdb.get(`/movie/${movieId}`, {
    params: {
      append_to_response:
        'credits,reviews,recommendations,keywords,watch/providers,external_ids',
    },
  })
  return response.data
}
