import { SettingsCard } from '../../components/settings'
import { Button } from '../../components/common'

const models = [
  { id: 1, name: 'GPT-4 Turbo', provider: 'OpenAI', type: 'chat', price: 0.03, multiplier: 1.0, status: 'enabled', channel: 'OpenAI官方-US' },
  { id: 2, name: 'Claude 3 Opus', provider: 'Anthropic', type: 'chat', price: 0.015, multiplier: 1.0, status: 'enabled', channel: 'Claude官方' },
  { id: 3, name: 'Gemini Pro', provider: 'Google', type: 'chat', price: 0.0025, multiplier: 0.8, status: 'enabled', channel: 'Gemini官方' },
  { id: 4, name: 'ERNIE-4', provider: 'Baidu', type: 'chat', price: 0.02, multiplier: 1.2, status: 'disabled', channel: '百度文心' },
  { id: 5, name: 'Qwen-72B', provider: 'Alibaba', type: 'chat', price: 0.008, multiplier: 1.0, status: 'enabled', channel: '阿里通义' },
  { id: 6, name: 'DALL-E 3', provider: 'OpenAI', type: 'image', price: 0.04, multiplier: 1.0, status: 'enabled', channel: 'OpenAI官方-US' },
  { id: 7, name: 'Stable Diffusion XL', provider: 'Stability AI', type: 'image', price: 0.01, multiplier: 1.0, status: 'disabled', channel: '自建' },
]

export function ModelManagementPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>模型管理</div>
        <Button type="primary">添加模型</Button>
      </div>

      <SettingsCard>
        <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
          管理所有可用AI模型，配置价格倍率和关联渠道
        </div>

        <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>模型名称</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>供应商</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>类型</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>价格</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>倍率</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>状态</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>渠道</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr key={model.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '12px 8px', fontWeight: '500' }}>{model.name}</td>
                <td style={{ padding: '12px 8px' }}>{model.provider}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    background: model.type === 'chat' ? 'rgba(22, 100, 255, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                    color: model.type === 'chat' ? '#1664FF' : '#8b5cf6'
                  }}>
                    {model.type === 'chat' ? '对话' : '绘图'}
                  </span>
                </td>
                <td style={{ padding: '12px 8px', textAlign: 'right', color: 'var(--primary)' }}>${model.price}/1K</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>{model.multiplier}x</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    background: model.status === 'enabled' ? 'rgba(34, 197, 94, 0.1)' : 'var(--bg-fill)',
                    color: model.status === 'enabled' ? '#22c55e' : 'var(--text-muted)'
                  }}>
                    {model.status === 'enabled' ? '已启用' : '已禁用'}
                  </span>
                </td>
                <td style={{ padding: '12px 8px', fontSize: '12px' }}>{model.channel}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <button style={{ padding: '4px 8px', border: '1px solid var(--border)', borderRadius: '4px', background: '#fff', cursor: 'pointer', fontSize: '12px' }}>编辑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SettingsCard>
    </div>
  )
}
