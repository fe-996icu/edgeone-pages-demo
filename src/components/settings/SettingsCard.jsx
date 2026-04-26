import { Button } from '../common'
import './SettingsCard.css'

export function SettingsCard({ title, children, actions, className = '' }) {
  return (
    <div className={`settings-card ${className}`}>
      {title && <div className="settings-card-header"><div className="settings-card-title">{title}</div></div>}
      <div className="settings-card-body">{children}</div>
      {actions && <div className="settings-actions">{actions}</div>}
    </div>
  )
}
