import { SettingsCard } from '../../components/settings'
import { Button } from '../../components/common'

export function ProfilePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>个人设置</div>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>基本信息</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '6px' }}>用户名</label>
            <input type="text" defaultValue="zhangjianzhong" style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '6px' }}>邮箱</label>
            <input type="email" defaultValue="user@example.com" style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '6px' }}>手机号</label>
            <input type="tel" defaultValue="138****8888" style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px' }} />
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Button type="primary">保存修改</Button>
        </div>
      </SettingsCard>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>修改密码</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '6px' }}>当前密码</label>
            <input type="password" placeholder="请输入当前密码" style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '6px' }}>新密码</label>
            <input type="password" placeholder="请输入新密码" style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '6px' }}>确认新密码</label>
            <input type="password" placeholder="请再次输入新密码" style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px' }} />
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Button type="primary">修改密码</Button>
        </div>
      </SettingsCard>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>通知设置</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { label: '额度不足提醒', desc: '当余额低于设定阈值时发送邮件', checked: true },
            { label: '消费预警', desc: '日消费超过设定金额时发送通知', checked: true },
            { label: '通道异常告警', desc: 'API通道出现问题时及时通知', checked: false },
            { label: '营销推送', desc: '接收系统活动和优惠信息', checked: false },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border-light)' }}>
              <div>
                <div style={{ fontSize: '14px' }}>{item.label}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>{item.desc}</div>
              </div>
              <input type="checkbox" defaultChecked={item.checked} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            </div>
          ))}
        </div>
        <div style={{ marginTop: '20px' }}>
          <Button type="primary">保存设置</Button>
        </div>
      </SettingsCard>
    </div>
  )
}
