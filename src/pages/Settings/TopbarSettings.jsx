import { useState } from 'react'
import { Button, Switch } from '../../components/common'
import { SettingsCard } from '../../components/settings'
import './TopbarSettings.css'

export function TopbarSettings() {
  const [navItems, setNavItems] = useState([
    { title: '首页', description: '用户主页，展示系统信息', enabled: true },
    { title: '控制台', description: '用户控制面板，管理账户', enabled: true },
    { title: '模型广场', description: '模型定价，需要登录访问', enabled: true, needLogin: true, needLoginEnabled: false },
    { title: '文档', description: '系统文档和帮助信息', enabled: true },
    { title: '关于', description: '关于系统的详细信息', enabled: true },
  ])

  const handleToggle = (index) => {
    setNavItems(prev => prev.map((item, i) =>
      i === index ? { ...item, enabled: !item.enabled } : item
    ))
  }

  return (
    <SettingsCard
      title="顶栏管理"
      actions={
        <>
          <Button variant="secondary">重置为默认</Button>
          <Button>保存设置</Button>
        </>
      }
    >
      <div className="nav-item-group">
        {navItems.map((item, index) => (
          <div key={index} className="nav-item-simple">
            <div className="nav-item-content">
              <div className="nav-item-title">{item.title}</div>
              <div className="nav-item-desc">{item.description}</div>
            </div>
            <Switch checked={item.enabled} onChange={() => handleToggle(index)} />
          </div>
        ))}
      </div>
    </SettingsCard>
  )
}
