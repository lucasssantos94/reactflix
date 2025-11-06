import type { IGenre } from '@/app/types/Genres'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

export const SelectGenre = ({ genres }: { genres: IGenre[] }) => {
  return (
    <Select>
      <SelectTrigger className='w-[150px] bg-background text-foreground border border-border rounded-md px-3 py-2'>
        <SelectValue placeholder='Gêneros' />
      </SelectTrigger>
      <SelectContent className='bg-background border border-border rounded-md shadow-lg '>
        {genres.map(genre => (
          <SelectItem
            key={genre.id}
            value={genre.name}
            className='hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer'
          >
            {genre.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
