import { useEffect, useRef, useState } from 'react'
import { useGetAllMovies } from '@/app/hooks/movies/useGetAllMovies'
import { useGetMoviesGenres } from '@/app/hooks/movies/useGetMoviesGenres'
import type { IMovieDetails } from '@/app/types/MovieDetails'
import { ContainerGrid } from '@/views/components/ContainerGrid'
import { MediaCard } from '@/views/components/MediaCard'
import { SelectGenre } from '@/views/components/SelectGenre'
import { SkeletonCard } from '@/views/components/SkeletonCard'

const Movies = () => {
  const [selectedGenreId, setSelectedGenreId] = useState<string>('')

  const { movies, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetAllMovies(selectedGenreId as string)
  const { moviesGenres } = useGetMoviesGenres()

  const loadMoreMoviesRef = useRef<null | HTMLDivElement>(null)

  const handleSelectGenre = (genreId: string) => {
    setSelectedGenreId(genreId)
  }

  useEffect(() => {
    if (!loadMoreMoviesRef.current || !hasNextPage || isFetchingNextPage) return

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

    const currentRef = loadMoreMoviesRef.current
    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <>
      <title>ReactFlix - Filmes</title>
      <div className='mt-8 px-4 '>
        <div className='flex items-center gap-8 mb-8'>
          <h1 className='text-3xl font-normal'>Filmes</h1>
          <SelectGenre
            genres={moviesGenres ?? []}
            selectedGenre={selectedGenreId ?? ''}
            onGenreChange={handleSelectGenre}
          />
        </div>

        <section>
          <ContainerGrid>
            {isLoading
              ? Array.from({ length: 10 }).map(() => (
                  <SkeletonCard key={Math.random()} />
                ))
              : movies?.map((movie: IMovieDetails, index) => (
                  <MediaCard
                    key={`${movie.id}-${Math.floor(index / 20)}`}
                    media={movie}
                  />
                ))}

            {isFetchingNextPage &&
              Array.from({ length: 10 }).map(() => (
                <SkeletonCard key={`skeleton-${Math.random()}`} />
              ))}
          </ContainerGrid>
        </section>

        <div ref={loadMoreMoviesRef} />
      </div>
    </>
  )
}

export default Movies
