import { useState } from 'react'
import { Button, Switch, NumberInput, Textarea } from '../../components/common'
import { SettingsCard } from '../../components/settings'

export function MonitorSettings() {
  const [settings, setSettings] = useState({
    autoTest: false,
    testInterval: 10,
    maxResponseTime: 5,
    quotaAlert: 1000,
    failDisable: false,
    successEnable: false,
    disableKeywords: 'Your credit balance is too low\nThis organization has been disabled\nYou exceeded your current quota\nPermission denied\nThe security token included in the request is invalid\nOperation not allowed\nYour account is not authorized'
  })

  return (
    <SettingsCard title="监控设置" actions={<Button>保存监控设置</Button>}>
      <div className="settings-row">
        <div className="settings-item">
          <div className="switch-item" style={{ padding: '10px 0' }}>
            <Switch
              checked={settings.autoTest}
              onChange={(e) => setSettings(s => ({ ...s, autoTest: e.target.checked }))}
            />
            <span className="switch-item-label">定时测试所有通道</span>
          </div>
        </div>
        <div className="settings-item">
          <div className="settings-label">自动测试所有通道间隔时间</div>
          <NumberInput value={settings.testInterval} onChange={(v) => setSettings(s => ({ ...s, testInterval: v }))} unit="分钟" />
          <div className="help-text">每隔多少分钟测试一次所有通道</div>
        </div>
      </div>

      <div className="settings-row">
        <div className="settings-item">
          <div className="settings-label">测试所有渠道的最长响应时间</div>
          <NumberInput value={settings.maxResponseTime} onChange={(v) => setSettings(s => ({ ...s, maxResponseTime: v }))} unit="秒" />
          <div className="help-text">当运行通道全部测试时，超过此时间将自动禁用通道</div>
        </div>
        <div className="settings-item">
          <div className="settings-label">额度提醒阈值</div>
          <NumberInput value={settings.quotaAlert} onChange={(v) => setSettings(s => ({ ...s, quotaAlert: v }))} unit="Token" />
          <div className="help-text">低于此额度时将发送邮件提醒用户</div>
        </div>
      </div>

      <div className="settings-row">
        <div className="settings-item">
          <div className="switch-item" style={{ padding: '10px 0' }}>
            <Switch
              checked={settings.failDisable}
              onChange={(e) => setSettings(s => ({ ...s, failDisable: e.target.checked }))}
            />
            <span className="switch-item-label">失败时自动禁用通道</span>
          </div>
        </div>
        <div className="settings-item">
          <div className="switch-item" style={{ padding: '10px 0' }}>
            <Switch
              checked={settings.successEnable}
              onChange={(e) => setSettings(s => ({ ...s, successEnable: e.target.checked }))}
            />
            <span className="switch-item-label">成功时自动启用通道</span>
          </div>
        </div>
      </div>

      <div className="settings-row">
        <div className="settings-item full-width">
          <div className="settings-label">自动禁用关键词</div>
          <Textarea
            value={settings.disableKeywords}
            onChange={(e) => setSettings(s => ({ ...s, disableKeywords: e.target.value }))}
          />
          <div className="help-text">当上游通道返回错误中包含这些关键词时(不区分大小写)，自动禁用通道</div>
        </div>
      </div>
    </SettingsCard>
  )
}
