import { Search } from 'lucide-react'
import { Button } from '../ui/button'

export const BtnSearch = () => {
  return (
    <Button variant='ghost' className='border cursor-pointer'>
      Pesquisar
      <Search />
    </Button>
  )
}
