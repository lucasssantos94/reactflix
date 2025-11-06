import { getMoviesGenres } from '@app/services/movies/getMoviesGenres'
import type { IGenre } from '@app/types/Genres'
import { useQuery } from '@tanstack/react-query'

export function useGetMoviesGenres() {
  const { data, isLoading, refetch, isFetching, error } = useQuery<IGenre[]>({
    staleTime: Infinity,
    queryKey: ['movies-genres'],
    queryFn: getMoviesGenres,
  })
  return {
    moviesGenres: data,
    isLoading,
    refetch,
    isFetching,
    error,
  }
}
