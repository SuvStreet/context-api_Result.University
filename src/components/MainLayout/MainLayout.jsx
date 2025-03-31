import { NavLink, Outlet } from 'react-router'

export function MainLayout() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/characters">Персонажи</NavLink>
          </li>
          <li>
            <NavLink to="/location">Локации</NavLink>
          </li>
          <li>
            <NavLink to="/episode">Эпизоды</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
