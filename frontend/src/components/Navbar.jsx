import { NavLink } from 'react-router'

function Navbar() {
  return (
    <nav className="main-nav" aria-label="Main navigation">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Navbar
