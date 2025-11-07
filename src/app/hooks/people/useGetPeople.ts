import { getPeople } from '@app/services/people/getPeople'
import { useInfiniteQuery } from '@tanstack/react-query'

export function useGetPeople() {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    error,
  } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['people'],
    queryFn: ({ pageParam }) => getPeople(pageParam),
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const isLastPage = allPages.length >= lastPage.total_pages
      if (isLastPage) return null
      return lastPageParam + 1
    },
  })

  const people = data?.pages.flatMap(page => page.results) || []

  return {
    people,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    error,
  }
}
