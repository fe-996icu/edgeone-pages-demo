import { SettingsCard } from '../../components/settings'

const embeddingModels = [
  { id: 1, name: 'text-embedding-3-large', provider: 'OpenAI', price: 0.00013, status: 'online', dims: '3072' },
  { id: 2, name: 'text-embedding-3-small', provider: 'OpenAI', price: 0.00002, status: 'online', dims: '1536' },
  { id: 3, name: 'text-embedding-ada-002', provider: 'OpenAI', price: 0.0001, status: 'online', dims: '1536' },
  { id: 4, name: 'embed-english-v3', provider: 'Cohere', price: 0.0001, status: 'online', dims: '1024' },
  { id: 5, name: 'embed-multilingual-v3', provider: 'Cohere', price: 0.0001, status: 'online', dims: '1024' },
  { id: 6, name: 'bge-large-zh', provider: 'BAAI', price: 0.00002, status: 'online', dims: '1024' },
]

export function EmbeddingModelsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>嵌入模型</div>

      <SettingsCard>
        <div style={{ padding: '12px 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
          支持文本向量化，用于语义搜索、相似度匹配等场景
        </div>
      </SettingsCard>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
        {embeddingModels.map((model) => (
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
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{model.dims} 维</span>
            </div>
          </SettingsCard>
        ))}
      </div>
    </div>
  )
}
