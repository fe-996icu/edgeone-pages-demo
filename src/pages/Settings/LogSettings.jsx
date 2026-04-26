import { useState } from 'react'
import { Button, Switch, Input } from '../../components/common'
import { SettingsCard } from '../../components/settings'
import { IconCalendar } from '../../components/icons'

export function LogSettings() {
  const [settings, setSettings] = useState({
    enabled: false,
    clearDate: '2025-12-19 16:57:14'
  })

  return (
    <SettingsCard title="日志设置" actions={<Button>保存日志设置</Button>}>
      <div className="settings-row">
        <div className="settings-item">
          <div className="switch-item" style={{ padding: '10px 0' }}>
            <Switch
              checked={settings.enabled}
              onChange={(e) => setSettings(s => ({ ...s, enabled: e.target.checked }))}
            />
            <span className="switch-item-label">启用日志记录</span>
          </div>
        </div>
        <div className="settings-item">
          <div className="settings-label">清除历史日志</div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <Input
              value={settings.clearDate}
              style={{ flex: 1 }}
            />
            <Button variant="secondary" style={{ height: 32 }}>
              <IconCalendar />
            </Button>
          </div>
          <div className="help-text">将清除选定时间之前的所有日志</div>
          <Button variant="secondary" style={{ marginTop: 8 }}>清除历史日志</Button>
        </div>
      </div>
    </SettingsCard>
  )
}
