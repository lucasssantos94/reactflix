import type { ICollection, IMediaBase } from './MediaBase'

export interface IMovieDetails extends IMediaBase {
  // Campos específicos de filmes
  belongs_to_collection: ICollection | null
  budget: number
  imdb_id: string | null
  release_date: string
  revenue: number
  runtime: number | null
  title: string
  video: boolean
  original_title: string

  // Campos que não existem em filmes
  created_by?: never
  episode_run_time?: never
  first_air_date?: never
  in_production?: never
  languages?: never
  last_air_date?: never
  last_episode_to_air?: never
  name?: never
  next_episode_to_air?: never
  networks?: never
  number_of_episodes?: never
  number_of_seasons?: never
  seasons?: never
  type?: never
  original_name?: never
}
