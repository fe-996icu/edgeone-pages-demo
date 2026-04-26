import { NavLink } from 'react-router-dom'
import { IconLogo, IconUser } from '../icons'
import './Topbar.css'

const navItems = [
  { to: '/', label: '首页', end: true },
  { to: '/dashboard', label: '控制台', end: false },
  { to: '/model-square', label: '模型广场', end: false },
  { to: '/docs', label: '文档', end: false },
  { to: '/settings', label: '系统设置', end: false },
]

export function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-logo">
        <IconLogo />
        <span>EdgeAPI</span>
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
        <div className="user-menu-wrapper">
          <div className="user-avatar">
            <IconUser />
          </div>
          <div className="user-menu">
            <NavLink
              to="/about"
              className="user-menu-item"
            >
              关于
            </NavLink>
            <div className="user-menu-item">
              退出登录
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
