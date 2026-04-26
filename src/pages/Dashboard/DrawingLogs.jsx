import { SettingsCard } from '../../components/settings'
import { Button } from '../../components/common'

const drawings = [
  { id: 'IMG001', time: '2024-04-26 10:32:15', prompt: 'A beautiful sunset over the ocean...', model: 'DALL-E 3', size: '1024x1024', cost: '¥ 0.40', status: 'success' },
  { id: 'IMG002', time: '2024-04-26 10:15:42', prompt: 'A futuristic city with flying cars...', model: 'Midjourney v6', size: '1024x1024', cost: '¥ 0.80', status: 'success' },
  { id: 'IMG003', time: '2024-04-26 09:28:03', prompt: 'A cute cat sitting on a windowsill...', model: 'Stable Diffusion XL', size: '512x512', cost: '¥ 0.15', status: 'failed' },
  { id: 'IMG004', time: '2024-04-25 16:45:33', prompt: 'An abstract painting with blue tones...', model: 'DALL-E 3', size: '1792x1024', cost: '¥ 0.60', status: 'success' },
]

export function DrawingLogsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>绘图日志</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <select style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '14px' }}>
            <option>全部模型</option>
            <option>DALL-E 3</option>
            <option>Midjourney</option>
            <option>Stable Diffusion</option>
          </select>
          <Button type="primary" style={{ fontSize: '13px', padding: '8px 16px' }}>导出</Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>今日绘图次数</div>
          <div style={{ fontSize: '24px', fontWeight: '700' }}>23</div>
        </SettingsCard>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>今日消费</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--primary)' }}>¥ 12.50</div>
        </SettingsCard>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>成功率</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: '#22c55e' }}>95.6%</div>
        </SettingsCard>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>总消耗额度</div>
          <div style={{ fontSize: '24px', fontWeight: '700' }}>8,234</div>
        </SettingsCard>
      </div>

      <SettingsCard>
        <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>ID</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>时间</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>Prompt</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>模型</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>尺寸</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>费用</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>状态</th>
            </tr>
          </thead>
          <tbody>
            {drawings.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>#{item.id}</td>
                <td style={{ padding: '12px 8px' }}>{item.time}</td>
                <td style={{ padding: '12px 8px', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.prompt}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>{item.model}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)' }}>{item.size}</td>
                <td style={{ padding: '12px 8px', textAlign: 'right', color: 'var(--primary)' }}>{item.cost}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    background: item.status === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: item.status === 'success' ? '#22c55e' : '#ef4444'
                  }}>
                    {item.status === 'success' ? '成功' : '失败'}
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
