import { Carrousel } from '@/views/components/Carrousel'
import { LoadingSpinner } from '@/views/components/LoadingSpinner'

import { useHome } from './useHome'

const Home = () => {
  const { topRanted, isLoading, isError } = useHome()
  if (isLoading) return <LoadingSpinner />
  if (isError) return <div>Erro ao carregar filmes</div>
  return (
    <>
      <main className='p-6 flex flex-col gap-8'>
        <section>
          <h2 className='text-3xl font-semibold text-foreground-muted ml-4'>
            Mais Votados
          </h2>

          <div className='p-6'>
            <Carrousel media={topRanted ?? []} />
          </div>
        </section>
      </main>
      <section></section>
    </>
  )
}

export default Home
