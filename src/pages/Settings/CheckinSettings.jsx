import { useState } from 'react'
import { Button, Switch, NumberInput } from '../../components/common'
import { SettingsCard } from '../../components/settings'

export function CheckinSettings() {
  const [settings, setSettings] = useState({
    enabled: false,
    minReward: 1000,
    maxReward: 500,
    enablePreConsume: false,
  })

  return (
    <SettingsCard title="签到设置" actions={<Button>保存签到设置</Button>}>
      <div className="settings-row">
        <div className="settings-item">
          <div className="switch-item" style={{ padding: '10px 0' }}>
            <Switch
              checked={settings.enabled}
              onChange={(e) => setSettings(s => ({ ...s, enabled: e.target.checked }))}
            />
            <span className="switch-item-label">启用签到功能</span>
          </div>
          <div className="help-text">开启后，对免费模型(倍率为0，或者价格为0)的模型也会预消耗额度</div>
        </div>
        <div className="settings-item">
          <div className="settings-label">签到最小额度</div>
          <NumberInput value={settings.minReward} onChange={(v) => setSettings(s => ({ ...s, minReward: v }))} />
        </div>
        <div className="settings-item">
          <div className="settings-label">签到最大额度</div>
          <NumberInput value={settings.maxReward} onChange={(v) => setSettings(s => ({ ...s, maxReward: v }))} />
        </div>
      </div>

      <div className="settings-row">
        <div className="settings-item">
          <div className="switch-item" style={{ padding: '10px 0' }}>
            <Switch
              checked={settings.enablePreConsume}
              onChange={(e) => setSettings(s => ({ ...s, enablePreConsume: e.target.checked }))}
            />
            <span className="switch-item-label">对免费模型启用预消耗</span>
          </div>
          <div className="help-text">开启后，对免费模型(倍率为0，或者价格为0)的模型也会预消耗额度</div>
        </div>
      </div>
    </SettingsCard>
  )
}
