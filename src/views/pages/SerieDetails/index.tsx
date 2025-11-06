import { useParams } from 'react-router'
import { useGetSeriesDetails } from '@/app/hooks/series/useGetSerieDetails'
import { LoadingSpinner } from '@/views/components/LoadingSpinner'
import { MediaDetailsLayout } from '@/views/layout/MediaDetailsLayout'

const SerieDetails = () => {
  const { serieId } = useParams()
  const { serieDetails, isLoading, error } = useGetSeriesDetails(serieId || '')
  if (isLoading) return <LoadingSpinner />
  if (error) return <div>Erro ao carregar série</div>
  if (!serieDetails) return <div>Série não encontrada</div>
  return (
    <MediaDetailsLayout
      media={{
        type: 'tv',
        data: serieDetails,
      }}
    />
  )
}

export default SerieDetails
