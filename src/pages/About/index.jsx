import { SettingsCard } from '../../components/settings'
import { IconZap, IconShield, IconKey, IconChart, IconRocket } from '../../components/icons'
import './About.css'

export function AboutPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <SettingsCard>
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div className="about-logo">
            <IconRocket />
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 8px', color: 'var(--text-primary)' }}>EdgeAPI</h1>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 24px' }}>版本 1.0.0</p>
          <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}>
            EdgeAPI 是一个集成了多种AI模型能力的API管理平台，为开发者提供稳定、可靠、高效的AI接口服务。
          </p>
        </div>
      </SettingsCard>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--text-primary)' }}>核心功能</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {[
            { icon: IconZap, title: '多模型支持', desc: '集成OpenAI、Claude、Gemini等多种主流AI模型' },
            { icon: IconKey, title: '灵活计费', desc: '支持按量计费和预付费多种计费方式' },
            { icon: IconShield, title: '安全可靠', desc: '企业级安全防护，保障您的数据安全' },
            { icon: IconChart, title: '用量统计', desc: '实时查看API调用量和费用明细' },
          ].map((item) => (
            <div key={item.title} className="about-feature-item">
              <div className="about-feature-icon">
                <item.icon />
              </div>
              <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px', color: 'var(--text-primary)' }}>{item.title}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </SettingsCard>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--text-primary)' }}>技术栈</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {['React', 'Node.js', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'].map((tech) => (
            <span key={tech} style={{ padding: '6px 12px', background: 'var(--bg-fill)', borderRadius: '4px', fontSize: '13px', color: 'var(--text-primary)' }}>
              {tech}
            </span>
          ))}
        </div>
      </SettingsCard>

      <SettingsCard>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--text-primary)' }}>联系支持</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--text-muted)' }}>邮箱：</span>
            <span style={{ color: 'var(--text-primary)' }}>support@edgeapi.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--text-muted)' }}>网站：</span>
            <span style={{ color: 'var(--text-primary)' }}>https://edgeapi.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--text-muted)' }}>文档：</span>
            <span style={{ color: 'var(--text-primary)' }}>https://docs.edgeapi.com</span>
          </div>
        </div>
      </SettingsCard>
    </div>
  )
}
