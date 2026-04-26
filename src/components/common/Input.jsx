import './Input.css'

export function Input({ className = '', ...props }) {
  return <input className={`settings-input ${className}`} {...props} />
}
