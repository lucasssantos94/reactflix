import type { JSX } from 'react/jsx-runtime'

// Interfaces que são comuns a filmes e séries
export interface IGenre {
  id: number
  name: string
}

export interface IProductionCompany {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

export interface IProductionCountry {
  iso_3166_1: string
  name: string
}

export interface ISpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface ICollection {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

export interface ICast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  cast_id?: number
  character: string
  credit_id: string
  order: number
}

export interface ICrew {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  credit_id: string
  department: string
  job: string
}

export interface ICredits {
  cast: ICast[]
  crew: ICrew[]
}

export interface IAuthorDetails {
  name: string
  username: string
  avatar_path: string | null
  rating: number | null
}

export interface IReview {
  author: string
  author_details: IAuthorDetails
  content: string
  created_at: string
  id: string
  updated_at: string
  url: string
}

export interface IReviews {
  page: number
  results: IReview[]
  total_pages: number
  total_results: number
}

export interface IRecommendation {
  adult: boolean
  backdrop_path: string | null
  id: number
  title: string
  name?: string
  original_title: string
  overview: string
  poster_path: string | null
  media_type: string
  original_language: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IRecommendations {
  page: number
  results: IRecommendation[]
  total_pages: number
  total_results: number
}

export interface IKeyword {
  id: number
  name: string
}

export interface IKeywords {
  results: never[]
  map(
    arg0: (keyword: { id: number; name: string }) => JSX.Element
  ): import('react').ReactNode
  length: number
  keywords: IKeyword[]
}

export interface IWatchProvider {
  display_priority: number
  logo_path: string
  provider_name: string
  provider_id: number
}

export interface IWatchProvidersData {
  link: string
  flatrate?: IWatchProvider[]
  rent?: IWatchProvider[]
  buy?: IWatchProvider[]
  free?: IWatchProvider[]
  ads?: IWatchProvider[]
}

export interface IWatchProvidersResponse {
  id: number
  results: {
    [countryCode: string]: IWatchProvidersData
  }
}

export interface IExternalIds {
  imdb_id: string | null
  facebook_id: string | null
  instagram_id: string | null
  twitter_id: string | null
}

// Base comum para ambos
export interface IMediaBase {
  adult: boolean
  backdrop_path: string | null
  genres: IGenre[]
  homepage: string | null
  id: number
  origin_country: string[]
  original_language: string
  overview: string | null
  popularity: number
  poster_path: string | null
  production_companies: IProductionCompany[]
  production_countries: IProductionCountry[]
  spoken_languages: ISpokenLanguage[]
  status: string
  tagline: string | null
  vote_average: number
  vote_count: number
  credits: ICredits
  reviews: IReviews
  recommendations: IRecommendations
  keywords: IKeywords
  'watch/providers'?: IWatchProvidersResponse
  external_ids: IExternalIds | null
}
