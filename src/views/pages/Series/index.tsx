import { useEffect, useRef } from 'react'
import { useGetAllSeries } from '@/app/hooks/series/useGetAllSeries'
import type { ISeriesDetails } from '@/app/types/SerieDetails'
import { ContainerGrid } from '@/views/components/ContainerGrid'
import { MediaCard } from '@/views/components/MediaCard'
import { SkeletonCard } from '@/views/components/SkeletonCard'

const Series = () => {
  const { series, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetAllSeries()

  const loadMoreSeriesRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    if (!loadMoreSeriesRef.current || !hasNextPage || isFetchingNextPage) return

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries

        if (entry.isIntersecting) {
          fetchNextPage()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '600px',
      }
    )

    const currentRef = loadMoreSeriesRef.current
    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <>
      <title>ReactFlix - Series</title>

      <ContainerGrid>
        {isLoading
          ? Array.from({ length: 10 }).map(() => (
              <SkeletonCard key={Math.random()} />
            ))
          : series?.map((serie: ISeriesDetails, index) => (
              <MediaCard
                key={`${serie.id}-${Math.floor(index / 20)}`}
                media={serie}
              />
            ))}

        {isFetchingNextPage &&
          Array.from({ length: 10 }).map(() => (
            <SkeletonCard key={`skeleton-${Math.random()}`} />
          ))}
      </ContainerGrid>

      <div ref={loadMoreSeriesRef} />
    </>
  )
}

export default Series
