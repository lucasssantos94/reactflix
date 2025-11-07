import { getSeriesGenres } from '@app/services/series/getSeriesGenres'
import type { IGenre } from '@app/types/Genres'
import { useQuery } from '@tanstack/react-query'

export function useGetSeriesGenres() {
  const { data, isLoading, refetch, isFetching, error } = useQuery<IGenre[]>({
    staleTime: Infinity,
    queryKey: ['series-genres'],
    queryFn: getSeriesGenres,
  })
  return {
    seriesGenres: data,
    isLoading,
    refetch,
    isFetching,
    error,
  }
}
