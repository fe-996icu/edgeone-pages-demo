import { NavLink } from 'react-router-dom'
import { IconHome, IconDashboard, IconSettings } from '../icons'
import './Sidebar.css'

const menuItems = [
  { to: '/', icon: IconHome, label: '首页' },
  { to: '/dashboard', icon: IconDashboard, label: '控制台' },
  { to: '/settings', icon: IconSettings, label: '系统设置' },
]

export function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
              end={item.to === '/'}
            >
              <item.icon />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}
