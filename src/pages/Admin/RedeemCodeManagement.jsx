import { SettingsCard } from '../../components/settings'
import { Button } from '../../components/common'

const codes = [
  { id: 1, code: 'NEWUSER2024', type: '新人券', amount: '100 Tokens', quota: 100, used: 0, total: 1000, expiry: '2024-12-31', status: 'active' },
  { id: 2, code: 'SUMMER2024', type: '活动券', amount: '500 Tokens', quota: 500, used: 456, total: 500, expiry: '2024-08-31', status: 'active' },
  { id: 3, code: 'VIP2024', type: 'VIP券', amount: '2000 Tokens', quota: 2000, used: 2000, total: 200, expiry: '2024-06-30', status: 'exhausted' },
  { id: 4, code: 'WINTER2023', type: '活动券', amount: '300 Tokens', quota: 300, used: 0, total: 100, expiry: '2024-02-29', status: 'expired' },
]

export function RedeemCodeManagementPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>兑换码管理</div>
        <Button type="primary">生成兑换码</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>已生成</div>
          <div style={{ fontSize: '24px', fontWeight: '700' }}>1,800</div>
        </SettingsCard>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>已使用</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: '#22c55e' }}>456</div>
        </SettingsCard>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>发放额度</div>
          <div style={{ fontSize: '24px', fontWeight: '700' }}>86,700</div>
        </SettingsCard>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>有效活动</div>
          <div style={{ fontSize: '24px', fontWeight: '700' }}>2</div>
        </SettingsCard>
      </div>

      <SettingsCard>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
          <input type="text" placeholder="搜索兑换码..." style={{ flex: 1, padding: '8px 12px', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px' }} />
          <select style={{ padding: '8px 12px', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px' }}>
            <option>全部状态</option>
            <option>有效</option>
            <option>已用完</option>
            <option>已过期</option>
          </select>
        </div>

        <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>兑换码</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>类型</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>额度</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>使用进度</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>有效期</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>状态</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {codes.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '12px 8px', fontFamily: 'monospace', fontWeight: '500' }}>{item.code}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    background: 'rgba(22, 100, 255, 0.1)',
                    color: '#1664FF'
                  }}>
                    {item.type}
                  </span>
                </td>
                <td style={{ padding: '12px 8px', textAlign: 'right', color: 'var(--primary)' }}>{item.amount}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ flex: 1, height: '6px', background: 'var(--bg-fill)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${(item.used / item.total) * 100}%`, height: '100%', background: 'var(--primary)' }} />
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.used}/{item.total}</span>
                  </div>
                </td>
                <td style={{ padding: '12px 8px', fontSize: '12px' }}>{item.expiry}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    background: item.status === 'active' ? 'rgba(34, 197, 94, 0.1)' : item.status === 'exhausted' ? 'var(--bg-fill)' : 'rgba(239, 68, 68, 0.1)',
                    color: item.status === 'active' ? '#22c55e' : item.status === 'exhausted' ? 'var(--text-muted)' : '#ef4444'
                  }}>
                    {item.status === 'active' ? '有效' : item.status === 'exhausted' ? '已用完' : '已过期'}
                  </span>
                </td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <button style={{ padding: '4px 8px', border: '1px solid var(--border)', borderRadius: '4px', background: '#fff', cursor: 'pointer', fontSize: '12px' }}>复制</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SettingsCard>
    </div>
  )
}
