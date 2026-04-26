import { Switch } from '../common'
import { NavItem } from './NavItem'
import './NavSection.css'

export function NavSection({ title, items, enabled, onToggle }) {
  return (
    <div className="nav-section">
      <div className="nav-section-header">
        <div className="nav-section-title">{title}</div>
        <Switch checked={enabled} onChange={(e) => onToggle(e.target.checked)} />
      </div>
      <div className="nav-section-items">
        {items.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
