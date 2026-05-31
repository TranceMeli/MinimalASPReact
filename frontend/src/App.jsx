import { Routes, Route, Navigate } from 'react-router'
import AdminDashboard from './pages/AdminDashboard'
import UserDashboard from './pages/UserDashboard'
import Navbar from './components/Navbar'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user"  element={<UserDashboard />} />
      </Routes>
    </>
  )
}

export default App