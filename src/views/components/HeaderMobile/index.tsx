import { Clapperboard, Film, House, Menu, Users } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router'
import { BtnSearch } from '../BtnSearch'
import { Logo } from '../Logo'
import { NavHeader } from '../NavHeader'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { Button } from '../ui/button'

export const HeaderMobile = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true)

  const links = [
    { name: 'Home', href: '/', icon: <House /> },
    { name: 'Movies', href: '/movies', icon: <Film /> },
    { name: 'Series', href: '/series', icon: <Clapperboard /> },
    { name: 'People', href: '/people', icon: <Users /> },
  ]
  return (
    <>
      <header className='p-3 flex items-center justify-between border-b'>
        <Logo size='md' />

        <div className='space-x-2'>
          <ThemeSwitcher />
          <Button
            variant='ghost'
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className='border cursor-pointer'
          >
            <Menu />
          </Button>
        </div>
      </header>

      {menuIsOpen && (
        <div
          className={`${
            menuIsOpen ? 'flex' : 'hidden'
          } flex flex-col gap-2 absolute top-16 right-0 z-50 transition-all duration-200 border border-slate-200 dark:border-slate-600 p-3 rounded-md shadow-md animate-collapsible-down overflow-hidden`}
        >
          {links.map(link => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `${
                  isActive ? 'text-red-500 font-semibold' : ''
                } flex items-center gap-2 py-2 transition-colors duration-200 hover:text-red-500`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
          <BtnSearch />
        </div>
      )}
    </>
  )
}
