import { SettingsCard } from '../../components/settings'
import { Button } from '../../components/common'

const users = [
  { id: 1, name: '张显示', email: 'zhang@example.com', role: 'admin', quota: '8,234', status: 'active', lastLogin: '2024-04-26 10:32', created: '2023-06-15' },
  { id: 2, name: '李明', email: 'liming@example.com', role: 'user', quota: '2,345', status: 'active', lastLogin: '2024-04-25 18:20', created: '2023-08-20' },
  { id: 3, name: '王芳', email: 'wangfang@example.com', role: 'user', quota: '0', status: 'inactive', lastLogin: '2024-03-15 09:00', created: '2023-09-10' },
  { id: 4, name: '刘强', email: 'liuqiang@example.com', role: 'user', quota: '5,678', status: 'active', lastLogin: '2024-04-26 08:15', created: '2023-11-05' },
  { id: 5, name: '陈静', email: 'chenjing@example.com', role: 'vip', quota: '15,000', status: 'active', lastLogin: '2024-04-26 11:00', created: '2023-01-20' },
]

export function UserManagementPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>用户管理</div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button type="primary">添加用户</Button>
          <Button>批量导入</Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>总用户数</div>
          <div style={{ fontSize: '24px', fontWeight: '700' }}>1,234</div>
        </SettingsCard>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>活跃用户</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: '#22c55e' }}>892</div>
        </SettingsCard>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>VIP用户</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: '#f59e0b' }}>56</div>
        </SettingsCard>
        <SettingsCard>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>今日新增</div>
          <div style={{ fontSize: '24px', fontWeight: '700' }}>12</div>
        </SettingsCard>
      </div>

      <SettingsCard>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
          <input type="text" placeholder="搜索用户..." style={{ flex: 1, padding: '8px 12px', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px' }} />
          <select style={{ padding: '8px 12px', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px' }}>
            <option>全部角色</option>
            <option>管理员</option>
            <option>VIP</option>
            <option>普通用户</option>
          </select>
          <select style={{ padding: '8px 12px', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px' }}>
            <option>全部状态</option>
            <option>活跃</option>
            <option>未激活</option>
          </select>
        </div>

        <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>用户</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>邮箱</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>角色</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>额度</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>状态</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>最后登录</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>注册时间</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '12px 8px', fontWeight: '500' }}>{user.name}</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-secondary)' }}>{user.email}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    background: user.role === 'admin' ? 'rgba(239, 68, 68, 0.1)' : user.role === 'vip' ? 'rgba(245, 158, 11, 0.1)' : 'var(--bg-fill)',
                    color: user.role === 'admin' ? '#ef4444' : user.role === 'vip' ? '#f59e0b' : 'var(--text-muted)'
                  }}>
                    {user.role === 'admin' ? '管理员' : user.role === 'vip' ? 'VIP' : '用户'}
                  </span>
                </td>
                <td style={{ padding: '12px 8px', textAlign: 'right' }}>{user.quota}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    background: user.status === 'active' ? 'rgba(34, 197, 94, 0.1)' : 'var(--bg-fill)',
                    color: user.status === 'active' ? '#22c55e' : 'var(--text-muted)'
                  }}>
                    {user.status === 'active' ? '活跃' : '未激活'}
                  </span>
                </td>
                <td style={{ padding: '12px 8px', fontSize: '12px' }}>{user.lastLogin}</td>
                <td style={{ padding: '12px 8px', fontSize: '12px' }}>{user.created}</td>
                <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                    <button style={{ padding: '4px 8px', border: '1px solid var(--border)', borderRadius: '4px', background: '#fff', cursor: 'pointer', fontSize: '12px' }}>编辑</button>
                    <button style={{ padding: '4px 8px', border: '1px solid var(--border)', borderRadius: '4px', background: '#fff', cursor: 'pointer', fontSize: '12px' }}>充值</button>
                    <button style={{ padding: '4px 8px', border: '1px solid var(--border)', borderRadius: '4px', background: '#fff', cursor: 'pointer', fontSize: '12px', color: '#ef4444' }}>禁用</button>
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
