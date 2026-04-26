import { IconMinus, IconPlus } from '../icons'
import './NumberInput.css'

export function NumberInput({ value, onChange, min = 0, max = 999999, unit = '' }) {
  const handleDecrement = () => {
    if (value > min) onChange(value - 1)
  }

  const handleIncrement = () => {
    if (value < max) onChange(value + 1)
  }

  return (
    <div className="number-input">
      <button type="button" className="number-input-btn" onClick={handleDecrement}>
        <IconMinus />
      </button>
      <div className="number-input-value">
        {value}{unit && <span style={{ marginLeft: 4, color: 'var(--text-muted)' }}>{unit}</span>}
      </div>
      <button type="button" className="number-input-btn" onClick={handleIncrement}>
        <IconPlus />
      </button>
    </div>
  )
}
