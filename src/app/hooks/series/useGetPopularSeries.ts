import { getPopularSeries } from '@app/services/series/getPopularSeries'
import type { ISeriesDetails } from '@app/types/SerieDetails'
import { useQuery } from '@tanstack/react-query'

export const useGetPopularSeries = () => {
  const { data, isLoading, refetch, isFetching, error } = useQuery<
    ISeriesDetails[]
  >({
    staleTime: Infinity,
    queryKey: ['popular-series'],
    queryFn: () => getPopularSeries(),
  })
  return {
    popularSeries: data,
    isLoading,
    refetch,
    isFetching,
    error,
  }
}
