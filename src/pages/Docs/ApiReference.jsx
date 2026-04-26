import { SettingsCard } from '../../components/settings'

const apiEndpoints = [
  { method: 'POST', path: '/v1/chat/completions', desc: '聊天补全', type: 'chat' },
  { method: 'POST', path: '/v1/completions', desc: '文本补全', type: 'text' },
  { method: 'POST', path: '/v1/embeddings', desc: '文本嵌入', type: 'embedding' },
  { method: 'POST', path: '/v1/images/generations', desc: '图像生成', type: 'image' },
  { method: 'GET', path: '/v1/models', desc: '获取模型列表', type: 'info' },
  { method: 'GET', path: '/v1/user/quota', desc: '获取用户额度', type: 'info' },
]

export function ApiReferencePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>API参考</div>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>认证授权</div>
        <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '16px' }}>
          所有API请求都需要在Header中携带API密钥进行认证：
        </div>
        <div style={{ background: '#1e1e1e', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '13px', color: '#d4d4d4' }}>
          <div>Authorization: Bearer YOUR_API_KEY</div>
        </div>
      </SettingsCard>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>接口列表</div>
        <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>方法</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>路径</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--text-muted)', fontWeight: '500' }}>描述</th>
            </tr>
          </thead>
          <tbody>
            {apiEndpoints.map((ep) => (
              <tr key={ep.path} style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '12px 8px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '600',
                    background: ep.method === 'GET' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(22, 100, 255, 0.1)',
                    color: ep.method === 'GET' ? '#22c55e' : '#1664FF'
                  }}>
                    {ep.method}
                  </span>
                </td>
                <td style={{ padding: '12px 8px', fontFamily: 'monospace', fontSize: '13px' }}>{ep.path}</td>
                <td style={{ padding: '12px 8px', color: 'var(--text-secondary)' }}>{ep.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SettingsCard>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>错误码</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { code: '401', msg: '无效的API密钥' },
            { code: '403', msg: '无权访问该资源' },
            { code: '429', msg: '请求频率超限' },
            { code: '500', msg: '服务器内部错误' },
            { code: '503', msg: '服务暂时不可用' },
          ].map((err) => (
            <div key={err.code} style={{ display: 'flex', gap: '16px', padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
              <span style={{ fontFamily: 'monospace', fontWeight: '600', color: '#ef4444' }}>{err.code}</span>
              <span style={{ color: 'var(--text-secondary)' }}>{err.msg}</span>
            </div>
          ))}
        </div>
      </SettingsCard>
    </div>
  )
}
