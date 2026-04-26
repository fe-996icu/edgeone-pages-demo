import { SettingsCard } from '../../components/settings'

const imageModels = [
  { id: 1, name: 'DALL-E 3', provider: 'OpenAI', price: 0.04, status: 'online', size: '1024x1024' },
  { id: 2, name: 'DALL-E 2', provider: 'OpenAI', price: 0.02, status: 'online', size: '1024x1024' },
  { id: 3, name: 'Midjourney v6', provider: 'Midjourney', price: 0.08, status: 'online', size: '1024x1024' },
  { id: 4, name: 'Midjourney v5.2', provider: 'Midjourney', price: 0.04, status: 'online', size: '1024x1024' },
  { id: 5, name: 'Stable Diffusion XL', provider: 'Stability AI', price: 0.01, status: 'online', size: '1024x1024' },
  { id: 6, name: 'Stable Diffusion 3', provider: 'Stability AI', price: 0.004, status: 'beta', size: '1024x1024' },
  { id: 7, name: 'Flux Pro', provider: 'BlackForest', price: 0.05, status: 'online', size: '1024x1024' },
  { id: 8, name: 'Imagen 2', provider: 'Google', price: 0.03, status: 'online', size: '1024x1024' },
]

export function ImageModelsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>绘图模型</div>

      <SettingsCard>
        <div style={{ padding: '12px 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          支持文生图、图生图等图像生成能力
        </div>
      </SettingsCard>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
        {imageModels.map((model) => (
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
                background: model.status === 'online' ? 'rgba(34, 197, 94, 0.1)' : model.status === 'beta' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(255, 152, 0, 0.1)',
                color: model.status === 'online' ? '#22c55e' : model.status === 'beta' ? '#f59e0b' : '#ff9800'
              }}>
                {model.status === 'online' ? '在线' : model.status === 'beta' ? 'Beta' : '维护中'}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary)' }}>${model.price}</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}> / 张</span>
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
