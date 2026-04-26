import { useState } from 'react'
import { Button, Switch, Textarea } from '../../components/common'
import { SettingsCard } from '../../components/settings'

export function FilterSettings() {
  const [settings, setSettings] = useState({
    enabled: false,
    promptCheck: false,
    words: 'test_sensitive'
  })

  return (
    <SettingsCard title="屏蔽词过滤设置" actions={<Button>保存屏蔽词过滤设置</Button>}>
      <div className="settings-row">
        <div className="settings-item">
          <div className="switch-item" style={{ padding: '10px 0' }}>
            <Switch
              checked={settings.enabled}
              onChange={(e) => setSettings(s => ({ ...s, enabled: e.target.checked }))}
            />
            <span className="switch-item-label">启用屏蔽词过滤功能</span>
          </div>
        </div>
        <div className="settings-item">
          <div className="switch-item" style={{ padding: '10px 0' }}>
            <Switch
              checked={settings.promptCheck}
              onChange={(e) => setSettings(s => ({ ...s, promptCheck: e.target.checked }))}
            />
            <span className="switch-item-label">启用Prompt检查</span>
          </div>
        </div>
      </div>
      <div className="settings-row">
        <div className="settings-item">
          <div className="settings-label">屏蔽词列表</div>
          <Textarea
            value={settings.words}
            onChange={(e) => setSettings(s => ({ ...s, words: e.target.value }))}
          />
          <div className="help-text">一行一个屏蔽词，不需要符号分割</div>
        </div>
      </div>
    </SettingsCard>
  )
}
