import { getMediaTrailer } from '@app/services/media/getMediaTrailer'
import type { TMDBVideo } from '@app/types/TMDBVideo'
import { useQuery } from '@tanstack/react-query'

export function useGetMediaTrailer(id?: number) {
  const { data, isLoading, refetch, isFetching, error } =
    useQuery<TMDBVideo | null>({
      queryKey: ['movie-trailer', id],
      queryFn: () => {
        if (!id) throw new Error('ID do filme é obrigatório')
        return getMediaTrailer(id)
      },
      enabled: !!id,
    })

  return {
    trailer: data,
    isLoading,
    refetch,
    isFetching,
    error,
  }
}
