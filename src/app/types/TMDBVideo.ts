export interface TMDBVideo {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: 'Trailer' | 'Teaser' | 'Clip' | 'Featurette' | 'Behind the Scenes'
  official: boolean
  published_at: string
  id: string
}

export interface TMDBVideosResponse {
  id: number
  results: TMDBVideo[]
}
