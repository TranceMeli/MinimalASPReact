import { Outlet, NavLink, Link } from 'react-router'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className="layout">
      <header className="site-header">
        <div className="brand">MinimalApp</div>
        <div className="tagline">Placeholder tagline for the start page</div>
      </header>

      <Navbar />

      <div className="content">
        <aside className="sidebar" aria-label="Side links">
          <div className="sidebar-title">Quick links</div>
          <NavLink to="/admin">Admin Dashboard</NavLink>
          <NavLink to="/user">User Dashboard</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/help">Help</NavLink>
        </aside>

        <main className="main">
          <Outlet />
        </main>
      </div>

      <footer className="site-footer">
        <div>© 2026 MinimalApp · Placeholder footer</div>
        <div className="footer-links">
          <Link to="/imprint">Imprint</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
      </footer>
    </div>
  )
}

export default Layout
