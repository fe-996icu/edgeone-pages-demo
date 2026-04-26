import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Topbar } from './Topbar'
import { Sidebar } from './Sidebar'
import './Layout.css'

// Routes that need sidebar
const sidebarRoutes = ['/dashboard', '/model-square', '/docs', '/settings', '/admin']

function hasSidebar(pathname) {
  // Exact match or starts with the route (but not just '/')
  if (pathname === '/') return false
  return sidebarRoutes.some(route => pathname === route || pathname.startsWith(route + '/'))
}

export function Layout() {
  const location = useLocation()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const showSidebar = hasSidebar(location.pathname)

  return (
    <div className="settings-page">
      <Topbar />
      {showSidebar && <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />}
      <main className={`main-content ${showSidebar ? '' : 'no-sidebar'}`} style={showSidebar && sidebarCollapsed ? { marginLeft: '64px' } : {}}>
        <div className="settings-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
