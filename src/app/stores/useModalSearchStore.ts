import { create } from 'zustand'

type ModalSearchState = {
  isOpen: boolean
}

type Actions = {
  openModal: () => void
  closeModal: () => void
  toggleModal: () => void
}

export const useModalSearchStore = create<ModalSearchState & Actions>(set => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  toggleModal: () => set(state => ({ isOpen: !state.isOpen })),
}))

export const useCtrlKShortcut = () => {
  const { toggleModal } = useModalSearchStore()

  const setupCtrlKListener = () => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        toggleModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }

  return { setupCtrlKListener }
}
