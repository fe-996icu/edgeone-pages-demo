import { SettingsCard } from '../../components/settings'

const stats = [
  { label: '今日调用次数', value: '12,456', change: '+12%', positive: true },
  { label: '今日消费', value: '¥ 238.50', change: '+8%', positive: true },
  { label: '可用额度', value: '¥ 1,234.56', change: '-3%', positive: false },
  { label: '活跃模型', value: '8', change: '0%', positive: true },
]

const recentActivity = [
  { time: '10:32:15', model: 'GPT-4 Turbo', tokens: '2,345', cost: '¥ 0.70' },
  { time: '10:28:03', model: 'Claude 3', tokens: '5,678', cost: '¥ 0.85' },
  { time: '10:15:42', model: 'Gemini Pro', tokens: '1,234', cost: '¥ 0.03' },
  { time: '10:02:18', model: 'GPT-4 Turbo', tokens: '3,456', cost: '¥ 1.04' },
  { time: '09:45:33', model: 'ERNIE-4', tokens: '890', cost: '¥ 0.18' },
]

export function DataBoardPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>数据看板</div>
        <select style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '14px' }}>
          <option>今日</option>
          <option>本周</option>
          <option>本月</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {stats.map((stat) => (
          <SettingsCard key={stat.label}>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>{stat.label}</div>
            <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>{stat.value}</div>
            <div style={{ fontSize: '12px', color: stat.positive ? '#22c55e' : '#ef4444' }}>
              {stat.change} 较昨日
            </div>
          </SettingsCard>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <SettingsCard>
          <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>调用趋势</div>
          <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '20px 0' }}>
            {[65, 45, 78, 52, 90, 68, 85, 72, 88, 95, 80, 92].map((h, i) => (
              <div key={i} style={{
                width: '6%',
                height: `${h}%`,
                background: 'var(--primary)',
                borderRadius: '4px 4px 0 0',
                opacity: 0.7 + (i / 20)
              }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)' }}>
            <span>0时</span><span>4时</span><span>8时</span><span>12时</span><span>16时</span><span>20时</span><span>24时</span>
          </div>
        </SettingsCard>

        <SettingsCard>
          <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>模型分布</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { name: 'GPT-4 Turbo', percent: 45, color: '#1664FF' },
              { name: 'Claude 3', percent: 30, color: '#22c55e' },
              { name: 'Gemini Pro', percent: 15, color: '#f59e0b' },
              { name: '其他', percent: 10, color: '#8b5cf6' },
            ].map((item) => (
              <div key={item.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                  <span>{item.name}</span>
                  <span>{item.percent}%</span>
                </div>
                <div style={{ height: '6px', background: 'var(--bg-fill)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${item.percent}%`, height: '100%', background: item.color }} />
                </div>
              </div>
            ))}
          </div>
        </SettingsCard>
      </div>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>最近调用</div>
        <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>时间</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>模型</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>Tokens</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>费用</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((item, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>{item.time}</td>
                <td style={{ padding: '12px 8px' }}>{item.model}</td>
                <td style={{ padding: '12px 8px', textAlign: 'right' }}>{item.tokens}</td>
                <td style={{ padding: '12px 8px', textAlign: 'right', color: 'var(--primary)' }}>{item.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SettingsCard>
    </div>
  )
}
