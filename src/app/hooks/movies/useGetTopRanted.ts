import { getTopRanted } from '@app/services/movies/getTopRanted'
import { useQuery } from '@tanstack/react-query'
import type { IMovie } from '@/app/types/movies/Movie'

export function useGetTopRanted() {
  const { data, isLoading, isError } = useQuery<IMovie[]>({
    queryKey: ['top-ranted-movies'],
    queryFn: getTopRanted,
  })

  return {
    topRanted: data,
    isLoading,
    isError,
  }
}
