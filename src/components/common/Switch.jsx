import './Switch.css'

export function Switch({ checked, onChange, label }) {
  return (
    <label className="switch-item">
      <span className="settings-switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="settings-switch-slider"></span>
      </span>
      {label && <span className="switch-item-label">{label}</span>}
    </label>
  )
}
