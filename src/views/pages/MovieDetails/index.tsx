import { useParams } from 'react-router'
import { useGetMovieDetails } from '@/app/hooks/movies/useGetMovieDetails'
import { LoadingSpinner } from '@/views/components/LoadingSpinner'
import { MediaDetailsLayout } from '@/views/layout/MediaDetailsLayout'

const MovieDetails = () => {
  const { movieId } = useParams()
  const { movieDetails, isLoading, error } = useGetMovieDetails(movieId || '')

  if (isLoading) return <LoadingSpinner />
  if (error) return <div>Erro ao carregar série</div>
  if (!movieDetails) return <div>Filme não encontrado</div>

  return (
    <MediaDetailsLayout
      media={{
        type: 'movie',
        data: movieDetails,
      }}
    />
  )
}

export default MovieDetails
