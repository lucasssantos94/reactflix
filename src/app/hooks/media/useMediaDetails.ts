// hooks/useMediaDetails.ts - VERSÃO CORRIGIDA
import { useMediaDetailsStore } from '@app/stores/useMediaDetailsStore'

export const useMediaDetails = () => useMediaDetailsStore()

export const useMediaData = <T>() => {
  const data = useMediaDetailsStore(state => state.data)
  return data as T
}

export const useMediaType = () => useMediaDetailsStore(state => state.type)

export const useMediaInfo = () => {
  const data = useMediaDetailsStore(state => state.data)
  const type = useMediaDetailsStore(state => state.type)

  if (!data || !type) {
    return null
  }

  const getTitle = () => (type === 'movie' ? data.title : data.name)
  const getDate = () =>
    type === 'movie' ? data.release_date : data.first_air_date
  const getRunTime = () => {
    if (type === 'movie') return data.runtime

    const seasons = data?.number_of_seasons ?? 0
    return `${seasons} temporada${seasons > 1 ? 's' : ''}`
  }

  return {
    id: data.id,
    title: getTitle(),
    original_title: data.original_title || data.original_name,
    original_language: data.original_language,
    date: getDate(),
    runTime: getRunTime(),
    backdrop_path: data.backdrop_path,
    poster_path: data.poster_path,
    overview: data.overview,
    tagline: data.tagline,
    genres: data.genres || [],
    cast: data.credits?.cast || [],
    keywords: data.keywords.keywords || data.keywords.results || [],
    reviews: data.reviews?.results || [],
    recommendations: data.recommendations?.results || [],
    director: data.credits?.crew.find(
      (m: { job: string }) => m.job === 'Director'
    ),
    writers:
      data.credits?.crew.filter(
        (m: { job: string }) => m.job === 'Writer' || m.job === 'Screenplay'
      ) || [],
    createdBy: data.created_by || '',
    brazilProvidersFlatrate:
      data['watch/providers']?.results?.BR?.flatrate?.[0] || [],
    homepage: data.homepage || null,
    external_ids: data.external_ids || null,
    budget: data.budget,
    revenue: data.revenue,
    status: data.status,
    type,
  }
}
