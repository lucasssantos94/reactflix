import type { IMovieDetails } from '@app/types/MovieDetails'
import { useQuery } from '@tanstack/react-query'
import { getMovieDetails } from '@/app/services/movies/getMovieDetails'

export const useGetMovieDetails = (movieId: string) => {
  const { data, isLoading, refetch, isFetching, error } =
    useQuery<IMovieDetails>({
      staleTime: Infinity,
      queryKey: ['movieDetails', movieId],
      queryFn: () => getMovieDetails(movieId),
      enabled: !!movieId,
    })
  return {
    movieDetails: data,
    isLoading,
    refetch,
    isFetching,
    error,
  }
}
