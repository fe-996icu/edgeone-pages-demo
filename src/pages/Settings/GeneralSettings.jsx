import { useState } from 'react'
import { Button, Switch, NumberInput, Input } from '../../components/common'
import { SettingsCard } from '../../components/settings'
import './GeneralSettings.css'

export function GeneralSettings() {
  const [settings, setSettings] = useState({
    rechargeLink: '',
    docLink: '',
    retryCount: 0,
    customSymbol: '#',
    queryReturnsTokenQuota: false,
    collapseSidebar: false,
    demoMode: false,
    selfUseMode: false,
  })

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  return (
    <SettingsCard title="通用设置" actions={<Button>保存通用设置</Button>}>
      <div className="settings-row">
        <div className="settings-item">
          <div className="settings-label">充值链接</div>
          <Input
            placeholder="例如发卡网站的购买链接"
            value={settings.rechargeLink}
            onChange={(e) => handleChange('rechargeLink', e.target.value)}
          />
        </div>
        <div className="settings-item">
          <div className="settings-label">文档地址</div>
          <Input
            placeholder="https://"
            value={settings.docLink}
            onChange={(e) => handleChange('docLink', e.target.value)}
          />
        </div>
        <div className="settings-item">
          <div className="settings-label">失败重试次数</div>
          <NumberInput
            value={settings.retryCount}
            onChange={(v) => handleChange('retryCount', v)}
            min={0}
            max={10}
          />
        </div>
      </div>

      <div className="settings-row">
        <div className="settings-item">
          <div className="settings-label">站点额度展示类型及汇率</div>
          <div className="two-inputs">
            <div className="input-with-unit" style={{ flex: 1 }}>
              <Input placeholder="1USDT=" style={{ width: 60 }} />
              <Input placeholder="7" style={{ width: 60, textAlign: 'center' }} />
            </div>
            <div className="input-with-unit" style={{ flex: 1 }}>
              <Input placeholder="1USDT=" style={{ width: 60 }} />
              <Input placeholder="7" style={{ width: 60, textAlign: 'center' }} />
            </div>
          </div>
        </div>
        <div className="settings-item">
          <div className="settings-label">自定义货币符号</div>
          <Input
            value={settings.customSymbol}
            onChange={(e) => handleChange('customSymbol', e.target.value)}
          />
        </div>
      </div>

      <div className="settings-row">
        <div className="settings-item">
          <div className="switch-item" style={{ padding: '10px 0' }}>
            <Switch
              checked={settings.queryReturnsTokenQuota}
              onChange={(e) => handleChange('queryReturnsTokenQuota', e.target.checked)}
            />
            <span className="switch-item-label">额度查询接口返回令牌额度而非用户额度</span>
          </div>
        </div>
        <div className="settings-item">
          <div className="switch-item" style={{ padding: '10px 0' }}>
            <Switch
              checked={settings.collapseSidebar}
              onChange={(e) => handleChange('collapseSidebar', e.target.checked)}
            />
            <span className="switch-item-label">默认折叠侧边栏</span>
          </div>
        </div>
        <div className="settings-item">
          <div className="switch-item" style={{ padding: '10px 0' }}>
            <Switch
              checked={settings.demoMode}
              onChange={(e) => handleChange('demoMode', e.target.checked)}
            />
            <span className="switch-item-label">演示站点模式</span>
          </div>
        </div>
      </div>

      <div className="settings-row">
        <div className="settings-item">
          <div className="switch-item" style={{ padding: '10px 0' }}>
            <Switch
              checked={settings.selfUseMode}
              onChange={(e) => handleChange('selfUseMode', e.target.checked)}
            />
            <span className="switch-item-label">自用模式</span>
          </div>
          <div className="help-text">开启后不限制:必须设置模型倍率</div>
        </div>
      </div>
    </SettingsCard>
  )
}
