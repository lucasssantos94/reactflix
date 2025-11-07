import type { IGenre } from '@/app/types/Genres'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

interface ISelectGenreProps {
  genres: IGenre[]
  selectedGenre: string
  onGenreChange: (value: string) => void
}

export const SelectGenre = ({
  genres,
  selectedGenre,
  onGenreChange,
}: ISelectGenreProps) => {
  return (
    <Select value={selectedGenre} onValueChange={onGenreChange}>
      <SelectTrigger className='w-[150px] bg-background text-foreground border border-border rounded-md px-3 py-2'>
        <SelectValue placeholder='Gêneros' />
      </SelectTrigger>
      <SelectContent className='bg-background border border-border rounded-md shadow-lg '>
        <SelectItem value=' '>Todos os gêneros</SelectItem>
        {genres.map(genre => (
          <SelectItem
            key={genre.id}
            value={String(genre.id)}
            className='hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer'
          >
            {genre.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
