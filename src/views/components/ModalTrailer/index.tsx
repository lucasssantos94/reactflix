import { useGetMediaTrailer } from '@app/hooks/media/useGetMediaTrailer'
import { useTrailerStore } from '@app/stores/useTrailerStore'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '../ui/dialog'

const ModalTrailer = () => {
  const { isOpen, mediaId, closeModal } = useTrailerStore()
  const { trailer } = useGetMediaTrailer(mediaId || 0)

  if (!mediaId) return null

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className='min-w-full md:min-w-[70%] min-h-[300px] p-0'>
        <DialogTitle className='text-white text-lg font-semibold m-0 p-4'>
          {trailer?.name || 'Trailer'}
        </DialogTitle>
        <DialogDescription></DialogDescription>

        {trailer && (
          <div className='w-full h-full'>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=1&rel=0&modestbranding=1&fs=1`}
              title={trailer.name || 'Trailer do filme'}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen'
              style={{ width: '100%', height: '70vh' }}
              allowFullScreen
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default ModalTrailer
