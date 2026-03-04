import { NavLink } from 'react-router';

export function Nav() {
  return (
    <nav className={'p-12 bg-blue-500'}>
      <NavLink to={'/'} end className={({ isActive }) =>
        `${isActive ? 'text-gray-700' : 'text-black'} mr-6`
      }>
        Home
      </NavLink>

      <NavLink to={'/about'} end className={({ isActive }) =>
        `${isActive ? 'text-gray-700' : 'text-black'} mr-6`
      }
      >
        About
      </NavLink>
    </nav>
  )
}
