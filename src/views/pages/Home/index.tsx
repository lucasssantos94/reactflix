import Banner from '@/views/components/Banner'
import { Carousel } from '@/views/components/Carousel'
import { LoadingSpinner } from '@/views/components/LoadingSpinner'
import { MediaCard } from '@/views/components/MediaCard'
import { useHome } from './useHome'

const Home = () => {
  const { topRanted, trendingWeekMovies, isLoading, isError } = useHome()
  if (isLoading) return <LoadingSpinner />
  if (isError) return <div>Erro ao carregar filmes</div>
  return (
    <>
      <Banner data={trendingWeekMovies ?? []} />
      <div className='flex flex-col gap-8 '>
        <section>
          <h2 className='text-3xl font-semibold text-foreground-muted mb-4'>
            Mais Votados
          </h2>

          <Carousel
            data={topRanted ?? []}
            keyExtractor={item => item.id}
            renderItem={item => <MediaCard media={item} />}
          />
        </section>
        <section>
          <h2 className='text-3xl font-semibold text-foreground-muted mb-4'>
            Mais Votados
          </h2>

          <Carousel
            data={topRanted ?? []}
            keyExtractor={item => item.id}
            renderItem={item => <MediaCard media={item} />}
          />
        </section>

        <section></section>
      </div>
    </>
  )
}

export default Home
