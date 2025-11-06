import { getTrendingWeekMovies } from '@app/services/movies/getTrendingWeekMovies'
import { useQuery } from '@tanstack/react-query'
import type { IMovieDetails } from '@/app/types/MovieDetails'

export function useGetTrendingWeekMovies() {
  const { data, isLoading, isError } = useQuery<IMovieDetails[]>({
    queryKey: ['trending-week-movies'],
    queryFn: getTrendingWeekMovies,
  })

  return {
    trendingWeekMovies: data,
    isLoading,
    isError,
  }
}
