import { SettingsCard } from '../../components/settings'
import { Button } from '../../components/common'

const deployments = [
  { id: 1, name: 'GPT-4-Turbo-Production', model: 'GPT-4 Turbo', version: 'v4', replicas: 3, status: 'running', endpoint: 'api.newapi.com/gpt4', created: '2024-01-15' },
  { id: 2, name: 'Claude-3-Production', model: 'Claude 3 Opus', version: 'v3', replicas: 2, status: 'running', endpoint: 'api.newapi.com/claude3', created: '2024-02-20' },
  { id: 3, name: 'Gemini-Pro-Stable', model: 'Gemini Pro', version: 'v1', replicas: 2, status: 'running', endpoint: 'api.newapi.com/gemini', created: '2024-03-10' },
  { id: 4, name: 'ERNIE-4-Beta', model: 'ERNIE-4', version: 'v4', replicas: 1, status: 'stopped', endpoint: 'api.newapi.com/ernie', created: '2024-04-01' },
]

export function ModelDeploymentPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>模型部署</div>
        <Button type="primary">新建部署</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>部署总数</div>
          <div style={{ fontSize: '24px', fontWeight: '700' }}>4</div>
        </SettingsCard>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>运行中</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: '#22c55e' }}>3</div>
        </SettingsCard>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>已停止</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-muted)' }}>1</div>
        </SettingsCard>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>总副本数</div>
          <div style={{ fontSize: '24px', fontWeight: '700' }}>8</div>
        </SettingsCard>
      </div>

      <SettingsCard>
        <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>部署名称</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>模型</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>版本</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>副本</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>状态</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>端点</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>创建时间</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {deployments.map((dep) => (
              <tr key={dep.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '12px 8px', fontWeight: '500' }}>{dep.name}</td>
                <td style={{ padding: '12px 8px' }}>{dep.model}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>{dep.version}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>{dep.replicas}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    background: dep.status === 'running' ? 'rgba(34, 197, 94, 0.1)' : 'var(--bg-fill)',
                    color: dep.status === 'running' ? '#22c55e' : 'var(--text-muted)'
                  }}>
                    {dep.status === 'running' ? '运行中' : '已停止'}
                  </span>
                </td>
                <td style={{ padding: '12px 8px', fontSize: '12px', fontFamily: 'monospace' }}>{dep.endpoint}</td>
                <td style={{ padding: '12px 8px', fontSize: '12px' }}>{dep.created}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                    <button style={{ padding: '4px 8px', border: '1px solid var(--border)', borderRadius: '4px', background: '#fff', cursor: 'pointer', fontSize: '12px' }}>
                      {dep.status === 'running' ? '停止' : '启动'}
                    </button>
                    <button style={{ padding: '4px 8px', border: '1px solid var(--border)', borderRadius: '4px', background: '#fff', cursor: 'pointer', fontSize: '12px' }}>扩缩容</button>
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
