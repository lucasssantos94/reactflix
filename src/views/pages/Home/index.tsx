import { useGetTopRanted } from '@/app/hooks/movies/useGetTopRanted'
import { LoadingSpinner } from '@/views/components/LoadingSpinner'
import { MediaCard } from '@/views/components/MediaCard'

const Home = () => {
  const { topRanted, isLoading, isError } = useGetTopRanted()
  console.log(topRanted)
  if (isLoading) return <LoadingSpinner />
  if (isError) return <div>Erro ao carregar filmes</div>
  return (
    <div>
      <h1>Home</h1>

      <div>
        {topRanted?.map(movie => (
          <MediaCard key={movie.id} media={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home
