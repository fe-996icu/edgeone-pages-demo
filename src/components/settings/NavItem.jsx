import { Switch } from '../common'
import './NavItem.css'

export function NavItem({ title, description, enabled, onToggle }) {
  return (
    <div className="nav-item">
      <div className="nav-item-content">
        <div className="nav-item-title">{title}</div>
        <div className="nav-item-desc">{description}</div>
      </div>
      <Switch checked={enabled} onChange={(e) => onToggle(e.target.checked)} />
    </div>
  )
}
