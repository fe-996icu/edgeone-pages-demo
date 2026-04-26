import { NavLink } from 'react-router-dom'
import { IconDashboard } from '../icons'
import './Topbar.css'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/dashboard', label: '控制台' },
  { to: '/model-square', label: '模型广场' },
  { to: '/docs', label: '文档' },
  { to: '/about', label: '关于' },
]

export function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-logo">
        <IconDashboard />
        <span>New API</span>
      </div>
      <nav className="topbar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => isActive ? 'active' : ''}
            end={item.to === '/'}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="topbar-user">
        <div className="user-avatar">
          <span className="avatar-text">A</span>
        </div>
      </div>
    </header>
  )
}
