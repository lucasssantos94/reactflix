import { getTrendingTodayMovies } from '@app/services/movies/getTrendingTodayMovies'
import type { IMovieDetails } from '@app/types/MovieDetails'
import { useQuery } from '@tanstack/react-query'

export function useGetTrendingTodayMovies() {
  const { data, isLoading, isError } = useQuery<IMovieDetails[]>({
    queryKey: ['trending-today-movies'],
    queryFn: getTrendingTodayMovies,
  })

  return {
    trendingTodayMovies: data,
    isLoading,
    isError,
  }
}
