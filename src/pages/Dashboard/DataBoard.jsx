import { SettingsCard } from '../../components/settings'
import './DataBoard.css'

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
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">数据看板</h1>
        <select className="page-select">
          <option>今日</option>
          <option>本周</option>
          <option>本月</option>
        </select>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <SettingsCard key={stat.label} className="stat-card">
            <div className="stat-label">{stat.label}</div>
            <div className="stat-value">{stat.value}</div>
            <div className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
              {stat.change} 较昨日
            </div>
          </SettingsCard>
        ))}
      </div>

      <div className="charts-grid">
        <SettingsCard title="调用趋势" className="chart-card">
          <div className="chart-bars">
            {[65, 45, 78, 52, 90, 68, 85, 72, 88, 95, 80, 92].map((h, i) => (
              <div key={i} className="chart-bar" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="chart-labels">
            <span>0时</span><span>4时</span><span>8时</span><span>12时</span><span>16时</span><span>20时</span><span>24时</span>
          </div>
        </SettingsCard>

        <SettingsCard title="模型分布" className="chart-card">
          <div className="model-distribution">
            {[
              { name: 'GPT-4 Turbo', percent: 45, color: '#1664FF' },
              { name: 'Claude 3', percent: 30, color: '#22c55e' },
              { name: 'Gemini Pro', percent: 15, color: '#f59e0b' },
              { name: '其他', percent: 10, color: '#8b5cf6' },
            ].map((item) => (
              <div key={item.name} className="distribution-item">
                <div className="distribution-header">
                  <span className="distribution-name">{item.name}</span>
                  <span className="distribution-percent">{item.percent}%</span>
                </div>
                <div className="distribution-bar">
                  <div className="distribution-fill" style={{ width: `${item.percent}%`, background: item.color }} />
                </div>
              </div>
            ))}
          </div>
        </SettingsCard>
      </div>

      <SettingsCard title="最近调用">
        <table className="data-table">
          <thead>
            <tr>
              <th>时间</th>
              <th>模型</th>
              <th className="text-right">Tokens</th>
              <th className="text-right">费用</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((item, i) => (
              <tr key={i}>
                <td className="text-muted">{item.time}</td>
                <td>{item.model}</td>
                <td className="text-right">{item.tokens}</td>
                <td className="text-right text-primary">{item.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SettingsCard>
    </div>
  )
}
