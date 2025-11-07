import { Link } from 'react-router'

import type { ICast } from '@/app/types/Cast'
import { getImageUrl } from '@/app/utils/getImageUrl'
import { MediaImage } from '../MediaImage'

export const CastCard = ({ member }: { member: ICast }) => {
  return (
    <Link to={`/people/${member.id}`}>
      <div key={member.id} className='text-center'>
        <MediaImage
          src={getImageUrl({ path: member.profile_path, size: 'W185' })}
          alt={member.name}
          size='W185'
          className='w-full h-48 object-cover rounded-lg mb-4 border border-[#444]'
          containerClassName='h-[239px]'
        />
        <h3 className='text-lg font-bold'>{member.name}</h3>
        <p className='text-sm text-[#777]'>{member.character}</p>
      </div>
    </Link>
  )
}
