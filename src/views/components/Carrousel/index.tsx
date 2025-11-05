import { MediaCard } from '@views/components/MediaCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@views/components/ui/carousel'
import type { IMovieDetails } from '@/app/types/MovieDetails'
import type { ISeriesDetails } from '@/app/types/SerieDetails'

type MediaType = IMovieDetails | ISeriesDetails

interface IMediaCarouselProps {
  media: MediaType[]
}

export const Carrousel = ({ media }: IMediaCarouselProps) => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {media.map(item => (
          <CarouselItem
            key={item.id}
            className='basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/7'
          >
            <MediaCard media={item} scale={false} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
