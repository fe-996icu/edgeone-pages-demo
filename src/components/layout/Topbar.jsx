import { IconDashboard } from '../icons'
import './Topbar.css'

export function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-logo">
        <IconDashboard />
        <span>New API</span>
      </div>
      <nav className="topbar-nav">
        <a href="#">首页</a>
        <a href="#" className="active">控制台</a>
        <a href="#">文档</a>
      </nav>
      <div className="topbar-user">
        <div className="avatar">A</div>
      </div>
    </header>
  )
}
