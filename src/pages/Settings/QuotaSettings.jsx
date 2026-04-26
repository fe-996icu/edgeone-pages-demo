import { useState } from 'react'
import { Button, Switch, NumberInput } from '../../components/common'
import { SettingsCard } from '../../components/settings'

export function QuotaSettings() {
  const [settings, setSettings] = useState({
    initialQuota: 0,
    preChargeQuota: 500,
    inviteReward: 0,
    enablePreConsume: false,
  })

  return (
    <SettingsCard title="额度设置" actions={<Button>保存额度设置</Button>}>
      <div className="settings-row">
        <div className="settings-item">
          <div className="settings-label">新用户初始额度</div>
          <NumberInput value={settings.initialQuota} onChange={(v) => setSettings(s => ({ ...s, initialQuota: v }))} unit="Token" />
        </div>
        <div className="settings-item">
          <div className="settings-label">请求预扣费额度</div>
          <NumberInput value={settings.preChargeQuota} onChange={(v) => setSettings(s => ({ ...s, preChargeQuota: v }))} unit="Token" />
          <div className="help-text">请求结束后多退少补</div>
        </div>
      </div>

      <div className="settings-row">
        <div className="settings-item">
          <div className="settings-label">新用户使用邀请码奖励额度</div>
          <NumberInput value={settings.inviteReward} onChange={(v) => setSettings(s => ({ ...s, inviteReward: v }))} unit="Token" />
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
