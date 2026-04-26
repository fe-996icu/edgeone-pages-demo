import { SettingsCard } from '../../components/settings'

const sdks = [
  { name: 'Python', version: 'v2.1.0', install: 'pip install newapi-sdk', status: 'stable' },
  { name: 'JavaScript/Node.js', version: 'v2.0.5', install: 'npm install newapi-sdk', status: 'stable' },
  { name: 'Go', version: 'v1.8.0', install: 'go get github.com/newapi/sdk-go', status: 'stable' },
  { name: 'Java', version: 'v1.5.0', install: 'mvn add newapi-java-sdk', status: 'stable' },
  { name: 'PHP', version: 'v1.2.0', install: 'composer require newapi/sdk-php', status: 'beta' },
  { name: 'Rust', version: 'v0.9.0', install: 'cargo add newapi-sdk', status: 'beta' },
]

export function SdkDownloadPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>SDK下载</div>

      <SettingsCard>
        <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          官方SDK可以帮助您更快地集成API服务，支持自动重试、错误处理等功能。
        </div>
      </SettingsCard>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '16px' }}>
        {sdks.map((sdk) => (
          <SettingsCard key={sdk.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div>
                <div style={{ fontSize: '16px', fontWeight: '600' }}>{sdk.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{sdk.version}</div>
              </div>
              <span style={{
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                background: sdk.status === 'stable' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                color: sdk.status === 'stable' ? '#22c55e' : '#f59e0b'
              }}>
                {sdk.status === 'stable' ? '稳定版' : 'Beta'}
              </span>
            </div>
            <div style={{ background: '#1e1e1e', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '12px', color: '#d4d4d4' }}>
              {sdk.install}
            </div>
          </SettingsCard>
        ))}
      </div>
    </div>
  )
}
