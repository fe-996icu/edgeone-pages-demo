import { SettingsCard } from '../../components/settings'
import './Docs.css'

const docs = [
  { category: '快速开始', items: [
    { title: 'API概述', desc: '了解API的基本概念和架构' },
    { title: '获取API密钥', desc: '如何申请和管理您的API密钥' },
    { title: '首次调用', desc: '完成您的第一次API调用' },
  ]},
  { category: 'API参考', items: [
    { title: '认证授权', desc: 'API密钥配置和权限管理' },
    { title: '请求格式', desc: '请求方法、参数和返回值说明' },
    { title: '错误码', desc: '常见错误码及解决方案' },
    { title: '限流策略', desc: '请求频率限制说明' },
  ]},
  { category: '开发者工具', items: [
    { title: 'SDK下载', desc: '各语言SDK下载和更新' },
    { title: '示例代码', desc: '完整调用示例' },
    { title: 'Webhook', desc: '异步回调配置' },
  ]},
  { category: '常见问题', items: [
    { title: '计费问题', desc: '用量计算和费用说明' },
    { title: '性能优化', desc: '提升API调用效率' },
    { title: '安全建议', desc: '保护您的API密钥' },
  ]},
]

export function DocsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">文档概览</h1>
      </div>

      <SettingsCard>
        <div className="page-desc">完整的API文档和开发指南，帮助您快速集成和使用系统</div>
      </SettingsCard>

      <div className="docs-grid">
        {docs.map((section) => (
          <SettingsCard key={section.category} title={section.category} className="doc-card">
            <div className="doc-list">
              {section.items.map((item) => (
                <div key={item.title} className="doc-item">
                  <div className="doc-title">{item.title}</div>
                  <div className="doc-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </SettingsCard>
        ))}
      </div>
    </div>
  )
}
