import type { ISeriesDetails } from './SerieDetails'

export interface ISeriesResponse {
  page: number
  results: ISeriesDetails[]
  total_pages: number
  total_results: number
}
