import { create } from 'zustand'
import type { IMovieDetails } from '../types/MovieDetails'
import type { ISeriesDetails } from '../types/SerieDetails'

type MediaData = IMovieDetails | ISeriesDetails

interface MediaDetailsState {
  data: MediaData | null
  type: 'movie' | 'tv' | null
}

type Actions = {
  setMediaDetails: (data: MediaData, type: 'movie' | 'tv') => void
  clearMediaDetails: () => void
}

export const useMediaDetailsStore = create<MediaDetailsState & Actions>(
  set => ({
    data: null,
    type: null,
    setMediaDetails: (data, type) => set({ data, type }),
    clearMediaDetails: () => set({ data: null, type: 'movie' }),
  })
)
