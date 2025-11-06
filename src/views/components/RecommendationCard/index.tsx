import { useMediaInfo } from '@app/hooks/media/useMediaDetails'
import { Link } from 'react-router'
import type { IRecommendation } from '@/app/types/MediaBase'
import { getImageUrl } from '@/app/utils/getImageUrl'
import { LoadingSpinner } from '../LoadingSpinner'

interface IRecommendationCardProps {
  media: IRecommendation
}
export const RecommendationCard = ({ media }: IRecommendationCardProps) => {
  const infoMedia = useMediaInfo()

  if (!infoMedia) return <LoadingSpinner />

  const { type } = infoMedia
  return (
    <Link to={type === 'movie' ? `/movies/${media.id}` : `/series/${media.id}`}>
      <div className='w-full md:w-[250px] h-35 relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-500 cursor-pointer'>
        <div className='relative w-full h-full'>
          <img
            src={getImageUrl({
              path: media.poster_path,
              size: 'CARD_HORIZONTAL',
            })}
            alt={media.title}
            className='object-cover w-full h-full transform transition-all duration-700 group-hover:scale-110'
          />

          <div className='absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-90'></div>
          <div className='absolute inset-0 bg-linear-to-r from-black/30 to-transparent opacity-60'></div>

          <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500'></div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-300 group-hover:translate-y-[-5px]'>
          <div className='flex items-center justify-between'>
            <h3 className='text-lg font-bold max-w-[60%] overflow-hidden text-nowrap text-ellipsis drop-shadow-2xl'>
              {media.title || media.name}
            </h3>

            <div
              className={`
        px-2 py-1 rounded-full text-xs font-black backdrop-blur-md border
        ${
          media.vote_average >= 7
            ? 'bg-green-500/90 text-white border-green-400'
            : media.vote_average >= 5
              ? 'bg-yellow-500/90 text-black border-yellow-400'
              : 'bg-red-500/90 text-white border-red-400'
        }
      `}
            >
              {`${(media.vote_average * 10).toFixed(0)}%`}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
