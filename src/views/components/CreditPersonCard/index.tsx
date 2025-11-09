import { Link } from 'react-router'
import { getImageUrl } from '@/app/utils/getImageUrl'
import { MediaImage } from '../MediaImage'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

interface ICreditPersonCardProps {
  credit: {
    id: number
    title?: string
    name?: string
    job?: string
    poster_path: string | null
    media_type: 'movie' | 'tv'
    character?: string
  }
}

export const CreditPersonCard = ({ credit }: ICreditPersonCardProps) => {
  return (
    <Link
      to={`/people/${credit.id}`}
      className='block w-full group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white dark:bg-gray-800'
    >
      <div className='aspect-2/3 overflow-hidden'>
        <MediaImage
          src={getImageUrl({ path: credit.poster_path, size: 'W500' })}
          alt={credit.title || credit.name || 'Poster'}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
          containerClassName='w-full h-full'
        />
      </div>

      <div className='p-3 text-center'>
        <Tooltip>
          <TooltipTrigger>
            <h3 className=' font-semibold text-gray-900 dark:text-white line-clamp-2  group-hover:text-red-600  transition-colors duration-200 text-ellipsis text-nowrap overflow-hidden'>
              {credit.title || credit.name}
            </h3>
          </TooltipTrigger>
          <TooltipContent>{credit.title || credit.name}</TooltipContent>
        </Tooltip>

        <p className='text-sm italic text-gray-400 text-ellipsis text-nowrap overflow-hidden'>
          {credit.character || credit.job}
        </p>
      </div>
    </Link>
  )
}
