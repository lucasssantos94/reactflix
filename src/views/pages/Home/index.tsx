import { useGetTopRanted } from '@/app/hooks/movies/useGetTopRanted'
import { LoadingSpinner } from '@/views/components/LoadingSpinner'

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
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </div>
  )
}

export default Home
