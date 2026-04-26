import { NavLink, useLocation } from 'react-router-dom'
import { IconChart, IconKey, IconFileText, IconImage, IconWallet, IconUser, IconGrid, IconBook, IconInfo, IconFilter, IconLog, IconMonitor, IconTicket, IconSettings, IconChannel, IconModel, IconDeploy, IconUsers, IconChat, IconEmbed, IconChevronLeft, IconChevronRight } from '../icons'
import './Sidebar.css'

// Define menus for each section
const menusBySection = {
  'dashboard': [
    { to: '/dashboard', icon: IconChart, label: '数据看板', end: true },
    { to: '/dashboard/tokens', icon: IconKey, label: '令牌管理', end: false },
    { to: '/dashboard/usage-logs', icon: IconFileText, label: '使用日志', end: false },
    { to: '/dashboard/drawing-logs', icon: IconImage, label: '绘图日志', end: false },
    { to: '/dashboard/wallet', icon: IconWallet, label: '钱包管理', end: false },
    { to: '/dashboard/profile', icon: IconUser, label: '个人设置', end: false },
  ],
  'model-square': [
    { to: '/model-square', icon: IconGrid, label: '全部模型', end: true },
    { to: '/model-square/chat', icon: IconChat, label: '对话模型', end: false },
    { to: '/model-square/image', icon: IconImage, label: '绘图模型', end: false },
    { to: '/model-square/embedding', icon: IconEmbed, label: '嵌入模型', end: false },
  ],
  'docs': [
    { to: '/docs', icon: IconBook, label: '文档概览', end: true },
    { to: '/docs/quickstart', icon: IconChart, label: '快速开始', end: false },
    { to: '/docs/api', icon: IconKey, label: 'API参考', end: false },
    { to: '/docs/sdk', icon: IconGrid, label: 'SDK下载', end: false },
    { to: '/docs/faq', icon: IconInfo, label: '常见问题', end: false },
  ],
  'settings': [
    { to: '/settings', icon: IconSettings, label: '运营设置', end: true },
    { to: '/settings/topbar', icon: IconGrid, label: '顶栏管理', end: false },
    { to: '/settings/sidebar', icon: IconGrid, label: '侧边栏管理', end: false },
    { to: '/settings/filter', icon: IconFilter, label: '屏蔽词过滤', end: false },
    { to: '/settings/logs', icon: IconLog, label: '日志设置', end: false },
    { to: '/settings/monitor', icon: IconMonitor, label: '监控设置', end: false },
    { to: '/settings/quota', icon: IconWallet, label: '额度设置', end: false },
    { to: '/settings/checkin', icon: IconTicket, label: '签到设置', end: false },
  ],
  'admin': [
    { to: '/admin', icon: IconChannel, label: '渠道管理', end: true },
    { to: '/admin/models', icon: IconModel, label: '模型管理', end: false },
    { to: '/admin/deployments', icon: IconDeploy, label: '模型部署', end: false },
    { to: '/admin/redeem-codes', icon: IconTicket, label: '兑换码管理', end: false },
    { to: '/admin/users', icon: IconUsers, label: '用户管理', end: false },
  ],
}

// Map paths to section keys
function getSectionFromPath(pathname) {
  if (pathname.startsWith('/admin')) return 'admin'
  if (pathname.startsWith('/settings')) return 'settings'
  if (pathname.startsWith('/dashboard')) return 'dashboard'
  if (pathname.startsWith('/model-square')) return 'model-square'
  if (pathname.startsWith('/docs')) return 'docs'
  return null // home and about pages have no sidebar
}

export function Sidebar({ collapsed, onToggle }) {
  const location = useLocation()
  const section = getSectionFromPath(location.pathname)
  const menuItems = section ? (menusBySection[section] || []) : []

  // Don't render sidebar for pages without sidebar
  if (!section) {
    return null
  }

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
              end={item.end}
            >
              <item.icon />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="sidebar-toggle" onClick={onToggle}>
        {collapsed ? <IconChevronRight /> : <IconChevronLeft />}
      </div>
    </aside>
  )
}
