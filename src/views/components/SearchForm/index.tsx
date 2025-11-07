import { Search, X } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export const SearchForm = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/search/${search}`)
    }
  }

  const handleClear = () => {
    setSearch('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='mt-8 flex items-center gap-2 w-full '
    >
      <div className='relative flex-1'>
        <Input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='Pesquise por filmes, séries ou pessoas'
          className='focus-visible:ring-0 focus-visible:outline-none border-gray-700 dark:border-gray-700 bg-white dark:bg-background text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 pr-10 transition-colors duration-200'
        />
        {search && (
          <button
            type='button'
            onClick={handleClear}
            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200'
          >
            <X size={18} />
          </button>
        )}
      </div>
      <Button
        type='submit'
        disabled={!search.trim()}
        className='cursor-pointer bg-background border border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white px-6 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2'
      >
        <Search size={18} />
        Buscar
      </Button>
    </form>
  )
}
