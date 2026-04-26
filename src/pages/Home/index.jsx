import { SettingsCard } from '../../components/settings'
import { Button } from '../../components/common'

export function HomePage() {
  return (
    <SettingsCard title="首页">
      <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        欢迎使用系统
      </div>
    </SettingsCard>
  )
}
