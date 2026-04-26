import './Textarea.css'

export function Textarea({ className = '', ...props }) {
  return <textarea className={`settings-textarea ${className}`} {...props} />
}
