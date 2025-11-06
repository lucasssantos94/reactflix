import { tmdb } from '@app/api/tmdb'
import type { TMDBVideo, TMDBVideosResponse } from '@app/types/TMDBVideo'

export async function getMediaTrailer(
  movieId: number
): Promise<TMDBVideo | null> {
  const fetchTrailers = async (language: string) => {
    const response = await tmdb.get<TMDBVideosResponse>(
      `/movie/${movieId}/videos`,
      { params: { language } }
    )
    return response.data.results
  }

  try {
    let videos = await fetchTrailers('pt-BR')

    if (!videos || videos.length === 0) {
      videos = await fetchTrailers('en-US')
    }

    if (!videos || videos.length === 0) return null

    const priorityChecks = [
      (v: TMDBVideo) =>
        v.site === 'YouTube' &&
        v.type === 'Trailer' &&
        /official/i.test(v.name),
      (v: TMDBVideo) => v.site === 'YouTube' && v.type === 'Trailer',
      (v: TMDBVideo) => v.site === 'YouTube' && v.type === 'Teaser',
      (v: TMDBVideo) =>
        v.site === 'YouTube' && /trailer|oficial|official/i.test(v.name),
    ]

    for (const check of priorityChecks) {
      const found = videos.find(check)
      if (found) return found
    }

    return videos.find(v => v.site === 'YouTube') || null
  } catch (error) {
    console.error(`❌ Erro ao buscar trailer para o filme ${movieId}:`, error)
    return null
  }
}
