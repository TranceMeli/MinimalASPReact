import { Link } from 'react-router'

function Navbar() {
  return (
    <nav>
      <Link to="/admin">Admin Dashboard</Link>
      <Link to="/user">User Dashboard</Link>
    </nav>
  )
}

export default Navbar