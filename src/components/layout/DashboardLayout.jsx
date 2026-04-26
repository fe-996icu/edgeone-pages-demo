import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Topbar } from './Topbar'
import { Sidebar } from './Sidebar'
import './Layout.css'

export function DashboardLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="settings-page">
      <Topbar />
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <main className="main-content" style={sidebarCollapsed ? { marginLeft: '64px' } : {}}>
        <div className="settings-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
