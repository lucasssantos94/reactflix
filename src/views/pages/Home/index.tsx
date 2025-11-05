import { Carousel } from '@/views/components/Carousel'
import { LoadingSpinner } from '@/views/components/LoadingSpinner'
import { MediaCard } from '@/views/components/MediaCard'
import { useHome } from './useHome'

const Home = () => {
  const { topRanted, isLoading, isError } = useHome()
  if (isLoading) return <LoadingSpinner />
  if (isError) return <div>Erro ao carregar filmes</div>
  return (
    <>
      <section>
        <h2 className='text-3xl font-semibold text-foreground-muted ml-4'>
          Mais Votados
        </h2>

        <Carousel
          data={topRanted ?? []}
          keyExtractor={item => item.id}
          renderItem={item => <MediaCard media={item} />}
        />
      </section>
      <section>
        <h2 className='text-3xl font-semibold text-foreground-muted ml-4'>
          Mais Votados
        </h2>

        <Carousel
          data={topRanted ?? []}
          keyExtractor={item => item.id}
          renderItem={item => <MediaCard media={item} />}
        />
      </section>

      <section></section>
    </>
  )
}

export default Home
