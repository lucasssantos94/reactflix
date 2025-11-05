import { Clapperboard, Film, House, Users } from 'lucide-react'
import { NavLink } from 'react-router'

export const NavHeader = () => {
  const links = [
    { name: 'Home', href: '/', icon: <House /> },
    { name: 'Movies', href: '/movies', icon: <Film /> },
    { name: 'Series', href: '/series', icon: <Clapperboard /> },
    { name: 'People', href: '/people', icon: <Users /> },
  ]

  return (
    <nav className={`flex gap-2`}>
      {links.map(link => (
        <NavLink
          key={link.name}
          to={link.href}
          className={({ isActive }) =>
            `${
              isActive ? 'text-red-500 font-semibold' : ''
            } flex items-center gap-2 px-4 py-2 transition-colors duration-200 hover:text-red-500`
          }
        >
          {link.icon}
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}
