import { useEffect, useRef, useState } from 'react'
import { useGetAllSeries } from '@/app/hooks/series/useGetAllSeries'
import { useGetSeriesGenres } from '@/app/hooks/series/useGetSeriesGenres'
import type { ISeriesDetails } from '@/app/types/SerieDetails'
import { ContainerGrid } from '@/views/components/ContainerGrid'
import { MediaCard } from '@/views/components/MediaCard'
import { SelectGenre } from '@/views/components/SelectGenre'
import { SkeletonCard } from '@/views/components/SkeletonCard'

const Series = () => {
  const [selectedGenreId, setSelectedGenreId] = useState<string>('')
  const { series, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetAllSeries(selectedGenreId as string)

  const { seriesGenres } = useGetSeriesGenres()

  const loadMoreSeriesRef = useRef<null | HTMLDivElement>(null)

  const handleSelectGenre = (genreId: string) => {
    setSelectedGenreId(genreId)
  }

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

      <div className='mt-8 px-4 '>
        <div className='flex items-center gap-8 mb-8'>
          <h1 className='text-3xl font-normal'>Series</h1>
          <SelectGenre
            genres={seriesGenres ?? []}
            selectedGenre={selectedGenreId ?? ''}
            onGenreChange={handleSelectGenre}
          />
        </div>

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
      </div>
    </>
  )
}

export default Series
