import type { IMovie } from './Movie'

export interface IResponseTopRanted {
  page: number
  results: IMovie[]
  total_pages: number
  total_results: number
}
