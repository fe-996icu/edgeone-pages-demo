import { SettingsCard } from '../../components/settings'

export function AboutPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
      <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700' }}>关于我们</div>

      <SettingsCard>
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚀</div>
          <h1 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 8px' }}>New API</h1>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 24px' }}>版本 2.0.0</p>
          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: '1.8' }}>
            New API 是一个集成了多种AI模型能力的API管理平台，为开发者提供稳定、可靠、高效的AI接口服务。
          </p>
        </div>
      </SettingsCard>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>核心功能</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {[
            { icon: '⚡', title: '多模型支持', desc: '集成OpenAI、Claude、Gemini等多种主流AI模型' },
            { icon: '💰', title: '灵活计费', desc: '支持按量计费和预付费多种计费方式' },
            { icon: '🔒', title: '安全可靠', desc: '企业级安全防护，保障您的数据安全' },
            { icon: '📊', title: '用量统计', desc: '实时查看API调用量和费用明细' },
          ].map((item) => (
            <div key={item.title} style={{ padding: '16px', background: 'var(--bg-page)', borderRadius: '8px' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
              <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>{item.title}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </SettingsCard>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>技术栈</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {['React', 'Node.js', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'].map((tech) => (
            <span key={tech} style={{ padding: '6px 12px', background: 'var(--bg-fill)', borderRadius: '4px', fontSize: '13px' }}>
              {tech}
            </span>
          ))}
        </div>
      </SettingsCard>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>联系支持</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--text-muted)' }}>邮箱：</span>
            <span>support@newapi.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--text-muted)' }}>网站：</span>
            <span>https://newapi.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--text-muted)' }}>文档：</span>
            <span>https://docs.newapi.com</span>
          </div>
        </div>
      </SettingsCard>
    </div>
  )
}
