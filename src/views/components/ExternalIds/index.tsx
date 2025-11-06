import facebookIcon from '@assets/icons/facebook.svg?url'
import imdbIcon from '@assets/icons/imdb.svg?url'
import instagramIcon from '@assets/icons/instagram.svg?url'
import linkIcon from '@assets/icons/link.svg?url'
import xIcon from '@assets/icons/x.svg?url'
import type { ReactNode } from 'react'
import type { IExternalIds } from '@/app/types/MediaBase'

export const EXTERNAL_ID_SOURCES: Record<
  'imdb' | 'facebook' | 'instagram' | 'twitter',
  { name: string; url: (id: string) => string; icon?: ReactNode }
> = {
  imdb: {
    name: 'IMDb',
    url: (id: string) => `https://www.imdb.com/title/${id}`,
    icon: <img src={imdbIcon} alt='IMDb' className='w-8 h-8' />,
  },
  facebook: {
    name: 'Facebook',
    url: (id: string) => `https://www.facebook.com/${id}`,
    icon: <img src={facebookIcon} alt='Facebook' className='w-8 h-8' />,
  },
  instagram: {
    name: 'Instagram',
    url: (id: string) => `https://www.instagram.com/${id}`,
    icon: <img src={instagramIcon} alt='Instagram' className='w-8 h-8' />,
  },
  twitter: {
    name: 'X',
    url: (id: string) => `https://twitter.com/${id}`,
    icon: <img src={xIcon} alt='X (Twitter)' className='w-8 h-8' />,
  },
}

export const ExternalIds = ({
  externalIds,
  homepage,
}: {
  externalIds: IExternalIds
  homepage: string
}) => {
  const idsMap = {
    imdb: externalIds.imdb_id,
    facebook: externalIds.facebook_id,
    instagram: externalIds.instagram_id,
    twitter: externalIds.twitter_id,
  }

  return (
    <div className='flex space-x-4'>
      {Object.entries(idsMap).map(([key, id]) => {
        if (!id) return null

        const source =
          EXTERNAL_ID_SOURCES[key as keyof typeof EXTERNAL_ID_SOURCES]

        // Validação extra para segurança
        if (!source) {
          console.warn(`Fonte não encontrada para: ${key}`)
          return null
        }

        return (
          <a
            key={key}
            href={source.url(id)}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
            title={source.name}
          >
            {source.icon || source.name}
          </a>
        )
      })}

      {homepage && (
        <a
          href={homepage}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          <img src={linkIcon} alt='Link' className='w-8 h-8' />
        </a>
      )}
    </div>
  )
}
