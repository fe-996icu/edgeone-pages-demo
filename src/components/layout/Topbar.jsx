import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IconDashboard } from '../icons'
import './Topbar.css'

const navItems = [
  { to: '/', label: '首页', end: true },
  { to: '/dashboard', label: '控制台', end: false },
  { to: '/model-square', label: '模型广场', end: false },
  { to: '/docs', label: '文档', end: false },
  { to: '/settings', label: '系统设置', end: false },
]

export function Topbar() {
  const [showUserMenu, setShowUserMenu] = useState(false)

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
            end={item.end}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="topbar-user">
        <div
          style={{ position: 'relative' }}
          onMouseEnter={() => setShowUserMenu(true)}
          onMouseLeave={() => setShowUserMenu(false)}
        >
          <div className="user-avatar" style={{ cursor: 'pointer' }}>
            <span className="avatar-text">A</span>
          </div>
          {showUserMenu && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '8px',
              background: '#fff',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-lg)',
              minWidth: '150px',
              zIndex: 1000,
              overflow: 'hidden'
            }}>
              <NavLink
                to="/about"
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  fontSize: '14px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border-light)'
                }}
              >
                关于
              </NavLink>
              <div style={{
                padding: '12px 16px',
                fontSize: '14px',
                color: 'var(--text-secondary)',
                cursor: 'pointer'
              }}>
                退出登录
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
