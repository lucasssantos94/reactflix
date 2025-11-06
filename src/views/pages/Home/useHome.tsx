import { useGetTopRanted } from '@/app/hooks/movies/useGetTopRanted'
import { useGetTrendingWeekMovies } from '@/app/hooks/movies/useGetTrendingWeekMovies'
import { useGetTrendingTodayMovies } from '@/app/hooks/movies/useGetTrenfingTodayMovies'
import { useGetPopularSeries } from '@/app/hooks/series/useGetPopularSeries'

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

  const { trendingTodayMovies } = useGetTrendingTodayMovies()
  const { popularSeries } = useGetPopularSeries()

  const isLoading = isLoadingTopRanted || isLoadingTrendingWeekMovies
  const isError = isTopRantedError || isTrendingWeekMoviesError

  return {
    topRanted,
    trendingWeekMovies,
    trendingTodayMovies,
    popularSeries,
    isLoading,
    isError,
  }
}
