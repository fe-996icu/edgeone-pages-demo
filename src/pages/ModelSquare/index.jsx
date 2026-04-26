import { SettingsCard } from '../../components/settings'

const models = [
  { id: 1, name: 'GPT-4 Turbo', provider: 'OpenAI', price: 0.03, status: 'online', type: 'chat' },
  { id: 2, name: 'Claude 3 Opus', provider: 'Anthropic', price: 0.015, status: 'online', type: 'chat' },
  { id: 3, name: 'Gemini Pro', provider: 'Google', price: 0.0025, status: 'online', type: 'chat' },
  { id: 4, name: 'ERNIE-4', provider: 'Baidu', price: 0.02, status: 'maintenance', type: 'chat' },
  { id: 5, name: 'Qwen-72B', provider: 'Alibaba', price: 0.008, status: 'online', type: 'chat' },
  { id: 6, name: 'GLM-4', provider: 'Zhipu', price: 0.01, status: 'online', type: 'chat' },
  { id: 7, name: 'DALL-E 3', provider: 'OpenAI', price: 0.04, status: 'online', type: 'image' },
  { id: 8, name: 'Midjourney v6', provider: 'Midjourney', price: 0.08, status: 'online', type: 'image' },
  { id: 9, name: 'Stable Diffusion XL', provider: 'Stability AI', price: 0.01, status: 'online', type: 'image' },
  { id: 10, name: 'text-embedding-3-large', provider: 'OpenAI', price: 0.00013, status: 'online', type: 'embedding' },
]

export function ModelSquarePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>全部模型</div>

      <SettingsCard>
        <div style={{ padding: '12px 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          选择您需要的AI模型，系统会根据模型价格和可用性自动分配最优质的通道
        </div>
      </SettingsCard>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
        {models.map((model) => (
          <SettingsCard key={model.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div>
                <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>{model.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{model.provider}</div>
              </div>
              <span style={{
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                background: model.status === 'online' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255, 152, 0, 0.1)',
                color: model.status === 'online' ? '#22c55e' : '#ff9800'
              }}>
                {model.status === 'online' ? '在线' : '维护中'}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary)' }}>${model.price}</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}> / 1K tokens</span>
              </div>
              <button style={{
                padding: '8px 16px',
                background: 'var(--primary)',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}>使用</button>
            </div>
          </SettingsCard>
        ))}
      </div>
    </div>
  )
}
