import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Topbar } from './Topbar'
import { Sidebar } from './Sidebar'
import './Layout.css'

// Routes that need sidebar
const sidebarRoutes = ['/dashboard', '/model-square', '/docs', '/settings', '/admin']

function hasSidebar(pathname) {
  if (pathname === '/') return false
  return sidebarRoutes.some(route => pathname === route || pathname.startsWith(route + '/'))
}

export function Layout() {
  const location = useLocation()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const showSidebar = hasSidebar(location.pathname)

  useEffect(() => {
    setMobileSidebarOpen(false)
  }, [location.pathname])

  const handleToggle = () => {
    if (window.innerWidth <= 1024) {
      setMobileSidebarOpen(!mobileSidebarOpen)
    } else {
      setSidebarCollapsed(!sidebarCollapsed)
    }
  }

  return (
    <div className="settings-page">
      <Topbar />
      {showSidebar && (
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={handleToggle}
          mobileOpen={mobileSidebarOpen}
        />
      )}
      <main className={`main-content ${showSidebar ? '' : 'no-sidebar'}`}>
        <div className="settings-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}