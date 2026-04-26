import { IconHome, IconDashboard, IconSettings } from '../icons'
import './Sidebar.css'

const menuItems = [
  { icon: IconHome, label: '首页' },
  { icon: IconDashboard, label: '控制台' },
  { icon: IconSettings, label: '系统设置' },
]

export function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className={`sidebar-item ${index === 2 ? 'active' : ''}`}>
            <item.icon />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
