import { useGetTopRanted } from '@/app/hooks/movies/useGetTopRanted'
import { useGetTrendingWeekMovies } from '@/app/hooks/movies/useGetTrendingWeekMovies'

export const useHome = () => {
  const {
    topRanted,
    isLoading: isLoadingTopRanted,
    isError: isTopRantedError,
  } = useGetTopRanted()

  const {
    trendingWeekMovies,
    isLoading: isLoadingTrendingWeekMovies,
    isError: isTrendingWeekMoviesError,
  } = useGetTrendingWeekMovies()

  const isLoading = isLoadingTopRanted || isLoadingTrendingWeekMovies
  const isError = isTopRantedError || isTrendingWeekMoviesError

  return {
    topRanted,
    trendingWeekMovies,
    isLoading,
    isError,
  }
}
