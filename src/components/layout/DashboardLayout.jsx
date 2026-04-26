import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Topbar } from './Topbar'
import { Sidebar } from './Sidebar'
import './Layout.css'

export function DashboardLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  useEffect(() => {
    setMobileSidebarOpen(false)
  }, [])

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
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={handleToggle}
        mobileOpen={mobileSidebarOpen}
      />
      <main className="main-content">
        <div className="settings-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}