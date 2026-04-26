import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { IconLogo, IconUser, IconMenu, IconClose, IconChart, IconKey, IconFileText, IconImage, IconWallet, IconGrid, IconBook, IconInfo, IconSettings, IconChannel, IconModel, IconDeploy, IconTicket, IconUsers, IconChat, IconEmbed, IconRocket, IconZap, IconChevronRight } from '../icons'
import './Topbar.css'

// 一级导航
const navItems = [
  { to: '/', label: '首页', end: true, icon: IconZap },
  { to: '/dashboard', label: '控制台', end: false, icon: IconChart },
  { to: '/model-square', label: '模型广场', end: false, icon: IconGrid },
  { to: '/docs', label: '文档', end: false, icon: IconBook },
  { to: '/settings', label: '系统设置', end: false, icon: IconSettings },
]

// 二级菜单数据
const subMenusBySection = {
  '/dashboard': [
    { to: '/dashboard', icon: IconChart, label: '数据看板', end: true },
    { to: '/dashboard/tokens', icon: IconKey, label: '令牌管理', end: false },
    { to: '/dashboard/usage-logs', icon: IconFileText, label: '使用日志', end: false },
    { to: '/dashboard/drawing-logs', icon: IconImage, label: '绘图日志', end: false },
    { to: '/dashboard/wallet', icon: IconWallet, label: '钱包管理', end: false },
    { to: '/dashboard/profile', icon: IconUser, label: '个人设置', end: false },
  ],
  '/model-square': [
    { to: '/model-square', icon: IconGrid, label: '全部模型', end: true },
    { to: '/model-square/chat', icon: IconChat, label: '对话模型', end: false },
    { to: '/model-square/image', icon: IconImage, label: '绘图模型', end: false },
    { to: '/model-square/embedding', icon: IconEmbed, label: '嵌入模型', end: false },
  ],
  '/docs': [
    { to: '/docs', icon: IconBook, label: '文档概览', end: true },
    { to: '/docs/quickstart', icon: IconRocket, label: '快速开始', end: false },
    { to: '/docs/api', icon: IconKey, label: 'API参考', end: false },
    { to: '/docs/sdk', icon: IconGrid, label: 'SDK下载', end: false },
    { to: '/docs/faq', icon: IconInfo, label: '常见问题', end: false },
  ],
  '/settings': [
    { to: '/settings', icon: IconSettings, label: '运营设置', end: true },
    { to: '/settings/topbar', icon: IconGrid, label: '顶栏管理', end: false },
    { to: '/settings/sidebar', icon: IconGrid, label: '侧边栏管理', end: false },
    { to: '/settings/filter', icon: IconInfo, label: '屏蔽词过滤', end: false },
    { to: '/settings/logs', icon: IconFileText, label: '日志设置', end: false },
    { to: '/settings/monitor', icon: IconChart, label: '监控设置', end: false },
    { to: '/settings/quota', icon: IconWallet, label: '额度设置', end: false },
    { to: '/settings/checkin', icon: IconTicket, label: '签到设置', end: false },
  ],
  '/admin': [
    { to: '/admin', icon: IconChannel, label: '渠道管理', end: true },
    { to: '/admin/models', icon: IconModel, label: '模型管理', end: false },
    { to: '/admin/deployments', icon: IconDeploy, label: '模型部署', end: false },
    { to: '/admin/redeem-codes', icon: IconTicket, label: '兑换码管理', end: false },
    { to: '/admin/users', icon: IconUsers, label: '用户管理', end: false },
  ],
}

// 根据路径获取当前模块
function getSectionFromPath(pathname) {
  if (pathname === '/') return null
  if (pathname.startsWith('/admin')) return '/admin'
  if (pathname.startsWith('/settings')) return '/settings'
  if (pathname.startsWith('/dashboard')) return '/dashboard'
  if (pathname.startsWith('/model-square')) return '/model-square'
  if (pathname.startsWith('/docs')) return '/docs'
  return null
}

export function Topbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState(null)
  const location = useLocation()

  // 监听窗口大小变化，大屏时关闭移动端菜单
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false)
        setExpandedSection(null)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 点击一级菜单：展开/收起二级菜单
  const handleNavClick = (item) => {
    const sectionKey = item.to === '/' ? null : item.to
    const hasSubMenu = sectionKey && subMenusBySection[sectionKey]

    if (hasSubMenu) {
      setExpandedSection(expandedSection === sectionKey ? null : sectionKey)
    } else {
      setMobileMenuOpen(false)
    }
  }

  // 点击二级菜单：跳转并关闭菜单
  const handleSubMenuClick = () => {
    setMobileMenuOpen(false)
    setExpandedSection(null)
  }

  return (
    <header className="topbar">
      <NavLink to="/" className="topbar-logo">
        <IconLogo />
        <span>EdgeAPI</span>
      </NavLink>
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
            <NavLink to="/about" className="user-menu-item">关于</NavLink>
            <div className="user-menu-item">退出登录</div>
          </div>
        </div>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* 移动端全屏菜单 */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {/* 一级导航 */}
        <div className="mobile-nav-list">
          {navItems.map((item) => {
            const sectionKey = item.to === '/' ? null : item.to
            const hasSubMenu = sectionKey && subMenusBySection[sectionKey]
            const isExpanded = expandedSection === sectionKey
            const isActive = location.pathname === item.to || (item.to !== '/' && location.pathname.startsWith(item.to))

            return (
              <div key={item.to} className="mobile-nav-group">
                <div
                  className={`mobile-nav-item ${isActive ? 'active' : ''} ${hasSubMenu ? 'has-submenu' : ''}`}
                  onClick={() => handleNavClick(item)}
                >
                  <span className="mobile-nav-icon"><item.icon /></span>
                  <span className="mobile-nav-label">{item.label}</span>
                  {hasSubMenu && (
                    <span className={`mobile-nav-arrow ${isExpanded ? 'expanded' : ''}`}>
                      <IconChevronRight />
                    </span>
                  )}
                </div>

                {/* 二级菜单 */}
                <div className={`mobile-submenu ${isExpanded ? 'expanded' : ''}`}>
                  {subMenusBySection[sectionKey]?.map((subItem) => {
                    const isSubActive = location.pathname === subItem.to
                    return (
                      <NavLink
                        key={subItem.to}
                        to={subItem.to}
                        className={`mobile-submenu-item ${isSubActive ? 'active' : ''}`}
                        end={subItem.end}
                        onClick={handleSubMenuClick}
                      >
                        <span className="mobile-submenu-icon"><subItem.icon /></span>
                        <span>{subItem.label}</span>
                      </NavLink>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </header>
  )
}