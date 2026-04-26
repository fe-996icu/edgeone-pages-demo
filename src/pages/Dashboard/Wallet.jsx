import { SettingsCard } from '../../components/settings'
import { Button } from '../../components/common'

const transactions = [
  { id: 'TXN001', time: '2024-04-26 10:32:15', desc: '充值 - 1000 Tokens', amount: '+1000', balance: '2345.67' },
  { id: 'TXN002', time: '2024-04-25 16:45:33', desc: 'API调用扣费 - GPT-4', amount: '-23.50', balance: '1345.67' },
  { id: 'TXN003', time: '2024-04-25 14:20:00', desc: 'API调用扣费 - Claude 3', amount: '-15.80', balance: '1369.17' },
  { id: 'TXN004', time: '2024-04-24 09:00:00', desc: '充值 - 500 Tokens', amount: '+500', balance: '1384.97' },
  { id: 'TXN005', time: '2024-04-23 18:30:22', desc: 'API调用扣费 - DALL-E 3', amount: '-8.00', balance: '884.97' },
]

export function WalletPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>钱包管理</div>
        <Button type="primary">充值</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        <SettingsCard>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>账户余额</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--primary)' }}>¥ 2,345.67</div>
            </div>
            <div style={{ fontSize: '48px' }}>💰</div>
          </div>
          <div style={{ marginTop: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
            ≈ 2,345,670 Tokens
          </div>
        </SettingsCard>

        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>本月消费</div>
          <div style={{ fontSize: '32px', fontWeight: '700' }}>¥ 892.50</div>
          <div style={{ marginTop: '16px', fontSize: '13px', color: '#22c55e' }}>
            ↓ 12% 较上月
          </div>
        </SettingsCard>

        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>本月充值</div>
          <div style={{ fontSize: '32px', fontWeight: '700' }}>¥ 3,000.00</div>
          <div style={{ marginTop: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
            共 3 笔交易
          </div>
        </SettingsCard>
      </div>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>充值套餐</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
          {[
            { amount: '100', price: '¥ 100', bonus: '无优惠' },
            { amount: '500', price: '¥ 500', bonus: '送5%' },
            { amount: '1000', price: '¥ 1000', bonus: '送10%' },
            { amount: '2000', price: '¥ 2000', bonus: '送15%' },
          ].map((pkg) => (
            <div key={pkg.amount} style={{
              padding: '16px',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <div style={{ fontSize: '20px', fontWeight: '700' }}>{pkg.amount}</div>
              <div style={{ fontSize: '14px', color: 'var(--primary)', marginTop: '4px' }}>{pkg.price}</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>{pkg.bonus}</div>
            </div>
          ))}
        </div>
      </SettingsCard>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>交易记录</div>
        <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>ID</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>时间</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>描述</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>金额</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>余额</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '12px 8px', color: 'var(--text-muted)' }}>#{txn.id}</td>
                <td style={{ padding: '12px 8px' }}>{txn.time}</td>
                <td style={{ padding: '12px 8px' }}>{txn.desc}</td>
                <td style={{ padding: '12px 8px', textAlign: 'right', color: txn.amount.startsWith('+') ? '#22c55e' : '#ef4444', fontWeight: '500' }}>
                  {txn.amount}
                </td>
                <td style={{ padding: '12px 8px', textAlign: 'right' }}>{txn.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SettingsCard>
    </div>
  )
}
