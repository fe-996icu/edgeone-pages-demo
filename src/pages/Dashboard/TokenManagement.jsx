import { SettingsCard } from '../../components/settings'
import { Button } from '../../components/common'

const tokens = [
  { name: '生产环境密钥', key: 'sk-live-xxxxx...xxxx', created: '2024-01-15', lastUsed: '2024-04-26', status: 'active' },
  { name: '测试环境密钥', key: 'sk-test-xxxxx...xxxx', created: '2024-03-20', lastUsed: '2024-04-25', status: 'active' },
  { name: '旧版密钥', key: 'sk-old-xxxxx...xxxx', created: '2023-11-08', lastUsed: '2023-12-01', status: 'inactive' },
]

export function TokenManagementPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>令牌管理</div>
        <Button type="primary">创建新密钥</Button>
      </div>

      <SettingsCard>
        <div style={{ padding: '16px', background: 'var(--bg-page)', borderRadius: '8px', marginBottom: '16px' }}>
          <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            API密钥是您调用API的凭证，请妥善保管，切勿泄露或提交到公开的代码仓库中。
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {tokens.map((token, i) => (
            <div key={i} style={{
              padding: '16px',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>{token.name}</span>
                  <span style={{
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    background: token.status === 'active' ? 'rgba(34, 197, 94, 0.1)' : 'var(--bg-fill)',
                    color: token.status === 'active' ? '#22c55e' : 'var(--text-muted)'
                  }}>
                    {token.status === 'active' ? '使用中' : '已停用'}
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{token.key}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  创建于 {token.created} · 最后使用 {token.lastUsed}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ padding: '6px 12px', border: '1px solid var(--border)', borderRadius: '6px', background: '#fff', cursor: 'pointer', fontSize: '13px' }}>复制</button>
                <button style={{ padding: '6px 12px', border: '1px solid var(--border)', borderRadius: '6px', background: '#fff', cursor: 'pointer', fontSize: '13px', color: '#ef4444' }}>删除</button>
              </div>
            </div>
          ))}
        </div>
      </SettingsCard>
    </div>
  )
}
