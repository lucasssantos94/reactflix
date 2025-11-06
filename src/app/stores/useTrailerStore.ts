import { create } from 'zustand'

type TrailerState = {
  isOpen: boolean
  mediaId: number | null
}

type Actions = {
  openModal: (id: number) => void
  closeModal: () => void
}

export const useTrailerStore = create<TrailerState & Actions>(set => ({
  isOpen: false,
  mediaId: null,
  openModal: (id: number) =>
    set(() => ({
      isOpen: true,
      mediaId: id,
    })),
  closeModal: () =>
    set(() => ({
      isOpen: false,
      mediaId: null,
    })),
}))
