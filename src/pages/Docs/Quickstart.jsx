import { SettingsCard } from '../../components/settings'
import { Button } from '../../components/common'

export function QuickstartPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>快速开始</div>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>获取API密钥</div>
        <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <p>1. 登录系统后，进入「控制台 → 令牌管理」</p>
          <p>2. 点击「创建新密钥」按钮</p>
          <p>3. 复制生成的API密钥，妥善保管</p>
        </div>
      </SettingsCard>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>发起首次请求</div>
        <div style={{ background: '#1e1e1e', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '13px', color: '#d4d4d4' }}>
          <div style={{ color: '#6a9955' }}>{'// cURL 示例'}</div>
          <div>{'curl -X POST https://api.newapi.com/v1/chat/completions \\'}</div>
          <div>{'  -H "Authorization: Bearer YOUR_API_KEY" \\'}</div>
          <div>{'  -H "Content-Type: application/json" \\'}</div>
          <div>{'  -d \'{"model": "gpt-4", "messages": [{"role": "user", "content": "Hello!"}]}\''}</div>
        </div>
      </SettingsCard>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>使用SDK</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {['Python', 'JavaScript/Node.js', 'Go', 'Java'].map((lang) => (
            <div key={lang} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'var(--bg-page)', borderRadius: '6px' }}>
              <span style={{ fontSize: '14px' }}>{lang}</span>
              <Button style={{ padding: '6px 12px', fontSize: '13px' }}>
                安装
              </Button>
            </div>
          ))}
        </div>
      </SettingsCard>
    </div>
  )
}
