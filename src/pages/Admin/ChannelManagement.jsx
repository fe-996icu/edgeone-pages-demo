import { SettingsCard } from '../../components/settings'
import { Button } from '../../components/common'

const channels = [
  { id: 1, name: 'OpenAI官方-US', provider: 'OpenAI', model: 'GPT-4 Turbo', status: 'online', latency: '1.2s', failRate: '0.1%' },
  { id: 2, name: 'OpenAI官方-EU', provider: 'OpenAI', model: 'GPT-4 Turbo', status: 'online', latency: '2.5s', failRate: '0.2%' },
  { id: 3, name: 'Claude官方', provider: 'Anthropic', model: 'Claude 3 Opus', status: 'online', latency: '1.8s', failRate: '0.05%' },
  { id: 4, name: 'Gemini官方', provider: 'Google', model: 'Gemini Pro', status: 'online', latency: '0.8s', failRate: '0.0%' },
  { id: 5, name: '百度文心', provider: 'Baidu', model: 'ERNIE-4', status: 'maintenance', latency: '-', failRate: '-' },
  { id: 6, name: '阿里通义', provider: 'Alibaba', model: 'Qwen-72B', status: 'online', latency: '1.5s', failRate: '0.3%' },
]

export function ChannelManagementPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>渠道管理</div>
        <Button type="primary">添加渠道</Button>
      </div>

      <SettingsCard>
        <div style={{ display: 'flex', gap: '24px', marginBottom: '16px' }}>
          <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            总渠道：<span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>6</span>
          </div>
          <div style={{ fontSize: '14px', color: '#22c55e' }}>
            在线：<span style={{ fontWeight: '600' }}>5</span>
          </div>
          <div style={{ fontSize: '14px', color: '#ef4444' }}>
            维护中：<span style={{ fontWeight: '600' }}>1</span>
          </div>
        </div>

        <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>渠道名称</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>供应商</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>模型</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>状态</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>延迟</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>失败率</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {channels.map((ch) => (
              <tr key={ch.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '12px 8px', fontWeight: '500' }}>{ch.name}</td>
                <td style={{ padding: '12px 8px' }}>{ch.provider}</td>
                <td style={{ padding: '12px 8px' }}>{ch.model}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    background: ch.status === 'online' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255, 152, 0, 0.1)',
                    color: ch.status === 'online' ? '#22c55e' : '#ff9800'
                  }}>
                    {ch.status === 'online' ? '在线' : '维护中'}
                  </span>
                </td>
                <td style={{ padding: '12px 8px', textAlign: 'right' }}>{ch.latency}</td>
                <td style={{ padding: '12px 8px', textAlign: 'right', color: ch.failRate === '0.0%' ? '#22c55e' : 'inherit' }}>{ch.failRate}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                    <button style={{ padding: '4px 8px', border: '1px solid var(--border)', borderRadius: '4px', background: '#fff', cursor: 'pointer', fontSize: '12px' }}>测试</button>
                    <button style={{ padding: '4px 8px', border: '1px solid var(--border)', borderRadius: '4px', background: '#fff', cursor: 'pointer', fontSize: '12px' }}>编辑</button>
                    <button style={{ padding: '4px 8px', border: '1px solid var(--border)', borderRadius: '4px', background: '#fff', cursor: 'pointer', fontSize: '12px', color: '#ef4444' }}>删除</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SettingsCard>
    </div>
  )
}
