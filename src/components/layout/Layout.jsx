import { Outlet } from 'react-router-dom'
import { Topbar } from './Topbar'
import { Sidebar } from './Sidebar'
import './Layout.css'

export function Layout() {
  return (
    <div className="settings-page">
      <Topbar />
      <Sidebar />
      <main className="main-content">
        <div className="settings-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
