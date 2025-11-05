import { getTopRanted } from '@app/services/movies/getTopRanted'
import { useQuery } from '@tanstack/react-query'
import type { IMovieDetails } from '@/app/types/MovieDetails'

export function useGetTopRanted() {
  const { data, isLoading, isError } = useQuery<IMovieDetails[]>({
    queryKey: ['top-ranted-movies'],
    queryFn: getTopRanted,
  })

  return {
    topRanted: data,
    isLoading,
    isError,
  }
}
