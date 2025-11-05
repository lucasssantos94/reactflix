import { useGetTopRanted } from '@/app/hooks/movies/useGetTopRanted'

export const useHome = () => {
  const {
    topRanted,
    isLoading: isLoadingTopRanted,
    isError,
  } = useGetTopRanted()

  const isLoading = isLoadingTopRanted

  return {
    topRanted,
    isLoading,
    isError,
  }
}
