import type { ICast, ICrew, IMediaBase } from './MediaBase'

// export Interfaces específicas para séries
export interface ICreatedBy {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string | null
}

export interface INetwork {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

export interface ISeason {
  air_date: string | null
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string | null
  season_number: number
  vote_average: number
}

export interface IEpisode {
  air_date: string | null
  episode_number: number
  episode_type: string
  id: number
  name: string
  overview: string
  production_code: string
  runtime: number | null
  season_number: number
  show_id: number
  still_path: string | null
  vote_average: number
  vote_count: number
  crew: ICrew[]
  guest_stars: ICast[]
}

export interface ILastEpisodeToAir {
  id: number
  name: string
  overview: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  episode_type: string
  production_code: string
  runtime: number | null
  season_number: number
  show_id: number
  still_path: string | null
}

export interface ISeriesDetails extends IMediaBase {
  // Campos específicos de séries
  created_by: ICreatedBy[]
  episode_run_time: number[]
  first_air_date: string
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: ILastEpisodeToAir | null
  name: string
  next_episode_to_air: null // Geralmente é null
  networks: INetwork[]
  number_of_episodes: number
  number_of_seasons: number
  seasons: ISeason[]
  type: string
  original_name: string

  // Campos que não existem em séries
  belongs_to_collection?: never
  budget?: never
  imdb_id?: never
  release_date?: never
  revenue?: never
  runtime?: never
  title?: never
  video?: never
  original_title?: never
}
