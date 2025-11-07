import { useEffect, useRef } from 'react'
import { useGetPeople } from '@/app/hooks/people/useGetPeople'
import type { IPersonDetails } from '@/app/types/PersonDetails'
import { ContainerGrid } from '@/views/components/ContainerGrid'
import { PersonCard } from '@/views/components/PersonCard'
import { SkeletonCard } from '@/views/components/SkeletonCard'

const People = () => {
  const loadMoreRef = useRef<HTMLDivElement | null>(null)
  const {
    people,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    error,
  } = useGetPeople()

  if (error) {
    return <p>Erro ao carregar pessoas</p>
  }

  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage || isFetchingNextPage) return

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries
        if (entry.isIntersecting) fetchNextPage()
      },
      { threshold: 0.1, rootMargin: '600px' }
    )

    const current = loadMoreRef.current
    observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <>
      <title>Pessoas Populares</title>
      <section className='mt-8 px-4'>
        <h1 className='text-3xl font-normal mb-8'>Pessoas Populares</h1>
        <ContainerGrid>
          {isLoading
            ? Array.from({ length: 20 }).map(() => (
                <SkeletonCard key={`skeleton-${Math.random()}`} />
              ))
            : people?.map((person: IPersonDetails) => (
                <PersonCard key={person.id} person={person} />
              ))}
          {isFetchingNextPage &&
            Array.from({ length: 10 }).map(() => (
              <SkeletonCard key={`next-skeleton-${Math.random()}`} />
            ))}
        </ContainerGrid>

        <div ref={loadMoreRef} />
      </section>
    </>
  )
}

export default People
