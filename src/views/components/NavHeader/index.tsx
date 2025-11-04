import { NavLink } from 'react-router'

export const NavHeader = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Movies', href: '/movies' },
    { name: 'Series', href: '/series' },
    { name: 'People', href: '/people' },
  ]

  return (
    <nav>
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
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}
