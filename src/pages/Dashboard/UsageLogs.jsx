import { SettingsCard } from '../../components/settings'
import { Button } from '../../components/common'

const logs = [
  { id: '1001', time: '2024-04-26 10:32:15', model: 'GPT-4 Turbo', type: 'chat', inputTokens: 1250, outputTokens: 890, cost: '¥ 0.85', status: 'success' },
  { id: '1002', time: '2024-04-26 10:28:03', model: 'Claude 3 Opus', type: 'chat', inputTokens: 2340, outputTokens: 1560, cost: '¥ 1.02', status: 'success' },
  { id: '1003', time: '2024-04-26 10:15:42', model: 'Gemini Pro', type: 'chat', inputTokens: 580, outputTokens: 420, cost: '¥ 0.03', status: 'success' },
  { id: '1004', time: '2024-04-26 10:02:18', model: 'GPT-4 Turbo', type: 'chat', inputTokens: 890, outputTokens: 1200, cost: '¥ 0.92', status: 'failed' },
  { id: '1005', time: '2024-04-26 09:45:33', model: 'ERNIE-4', type: 'chat', inputTokens: 1200, outputTokens: 800, cost: '¥ 0.18', status: 'success' },
]

export function UsageLogsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>使用日志</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <select style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '14px' }}>
            <option>全部模型</option>
            <option>GPT-4 Turbo</option>
            <option>Claude 3</option>
          </select>
          <select style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '14px' }}>
            <option>全部状态</option>
            <option>成功</option>
            <option>失败</option>
          </select>
          <Button type="primary" style={{ fontSize: '13px', padding: '8px 16px' }}>导出</Button>
        </div>
      </div>

      <SettingsCard>
        <div style={{ marginBottom: '16px', display: 'flex', gap: '24px', fontSize: '14px' }}>
          <div>总调用次数：<span style={{ fontWeight: '600' }}>12,456</span></div>
          <div>总消费：<span style={{ fontWeight: '600', color: 'var(--primary)' }}>¥ 2,345.67</span></div>
          <div>成功率：<span style={{ fontWeight: '600', color: '#22c55e' }}>98.5%</span></div>
        </div>

        <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>ID</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>时间</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>模型</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>类型</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>输入</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>输出</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>费用</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>状态</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>#{log.id}</td>
                <td style={{ padding: '12px 8px' }}>{log.time}</td>
                <td style={{ padding: '12px 8px' }}>{log.model}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center', textTransform: 'capitalize' }}>{log.type}</td>
                <td style={{ padding: '12px 8px', textAlign: 'right' }}>{log.inputTokens.toLocaleString()}</td>
                <td style={{ padding: '12px 8px', textAlign: 'right' }}>{log.outputTokens.toLocaleString()}</td>
                <td style={{ padding: '12px 8px', textAlign: 'right', color: 'var(--primary)' }}>{log.cost}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    background: log.status === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: log.status === 'success' ? '#22c55e' : '#ef4444'
                  }}>
                    {log.status === 'success' ? '成功' : '失败'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SettingsCard>
    </div>
  )
}
