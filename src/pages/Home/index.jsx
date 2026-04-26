import { NavLink } from 'react-router-dom'
import { IconChart, IconKey, IconBook, IconGrid, IconRocket, IconShield, IconZap, IconUsers } from '../../components/icons'
import { Button } from '../../components/common'
import './Home.css'

const stats = [
  { label: 'API 调用次数', value: '1,234,567', icon: IconChart },
  { label: '活跃模型', value: '28', icon: IconGrid },
  { label: '注册用户', value: '5,678', icon: IconUsers },
  { label: '服务可用性', value: '99.9%', icon: IconShield },
]

const features = [
  { icon: IconZap, title: '高性能', desc: '边缘节点部署，毫秒级响应' },
  { icon: IconShield, title: '安全可靠', desc: '企业级安全保障，数据全程加密' },
  { icon: IconKey, title: '灵活计费', desc: '按需付费，支持多种套餐' },
  { icon: IconBook, title: '完善文档', desc: '丰富的 API 文档和示例代码' },
]

const popularModels = [
  { name: 'GPT-4o', type: '对话模型', usage: '12.3M tokens' },
  { name: 'Claude-3.5', type: '对话模型', usage: '8.7M tokens' },
  { name: 'Stable Diffusion', type: '图像模型', usage: '45.2K 次' },
  { name: 'DALL-E 3', type: '图像模型', usage: '32.1K 次' },
]

export function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">轻松调用 AI 能力</h1>
          <p className="hero-desc">
            EdgeAPI 提供稳定、高性能的 AI API 服务，支持对话、图像、Embedding 等多种模型，
            帮助您快速构建 AI 应用。
          </p>
          <div className="hero-actions">
            <NavLink to="/docs/quickstart">
              <Button variant="primary">快速开始</Button>
            </NavLink>
            <NavLink to="/docs/api">
              <Button variant="outline">查看文档</Button>
            </NavLink>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-icon">
                <stat.icon />
              </div>
              <div className="stat-info">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">为什么选择 EdgeAPI</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon">
                <feature.icon />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="models-section">
        <div className="section-header">
          <h2 className="section-title">热门模型</h2>
          <NavLink to="/model-square" className="section-link">查看全部 →</NavLink>
        </div>
        <div className="models-grid">
          {popularModels.map((model) => (
            <div key={model.name} className="model-card">
              <div className="model-info">
                <div className="model-name">{model.name}</div>
                <div className="model-type">{model.type}</div>
              </div>
              <div className="model-usage">
                <span className="usage-label">用量</span>
                <span className="usage-value">{model.usage}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="quickstart-section">
        <div className="quickstart-content">
          <div className="quickstart-icon">
            <IconRocket />
          </div>
          <div className="quickstart-info">
            <h3>快速接入</h3>
            <p>只需三行代码，即可完成 API 调用</p>
          </div>
          <NavLink to="/dashboard/tokens">
            <Button variant="primary">获取 API Key</Button>
          </NavLink>
        </div>
      </section>
    </div>
  )
}
