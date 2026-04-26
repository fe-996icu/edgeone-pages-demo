import { SettingsCard } from '../../components/settings'
import './ModelSquare.css'

const models = [
  { id: 1, name: 'GPT-4 Turbo', provider: 'OpenAI', price: 0.03, status: 'online', type: 'chat' },
  { id: 2, name: 'Claude 3 Opus', provider: 'Anthropic', price: 0.015, status: 'online', type: 'chat' },
  { id: 3, name: 'Gemini Pro', provider: 'Google', price: 0.0025, status: 'online', type: 'chat' },
  { id: 4, name: 'ERNIE-4', provider: 'Baidu', price: 0.02, status: 'maintenance', type: 'chat' },
  { id: 5, name: 'Qwen-72B', provider: 'Alibaba', price: 0.008, status: 'online', type: 'chat' },
  { id: 6, name: 'GLM-4', provider: 'Zhipu', price: 0.01, status: 'online', type: 'chat' },
  { id: 7, name: 'DALL-E 3', provider: 'OpenAI', price: 0.04, status: 'online', type: 'image' },
  { id: 8, name: 'Midjourney v6', provider: 'Midjourney', price: 0.08, status: 'online', type: 'image' },
  { id: 9, name: 'Stable Diffusion XL', provider: 'Stability AI', price: 0.01, status: 'online', type: 'image' },
  { id: 10, name: 'text-embedding-3-large', provider: 'OpenAI', price: 0.00013, status: 'online', type: 'embedding' },
]

export function ModelSquarePage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">全部模型</h1>
      </div>

      <SettingsCard>
        <div className="page-desc">选择您需要的AI模型，系统会根据模型价格和可用性自动分配最优质的通道</div>
      </SettingsCard>

      <div className="models-grid">
        {models.map((model) => (
          <SettingsCard key={model.id} className="model-card">
            <div className="model-header">
              <div>
                <div className="model-name">{model.name}</div>
                <div className="model-provider">{model.provider}</div>
              </div>
              <span className={`model-status ${model.status}`}>
                {model.status === 'online' ? '在线' : '维护中'}
              </span>
            </div>
            <div className="model-footer">
              <div className="model-price">
                <span className="price-value">${model.price}</span>
                <span className="price-unit">/ 1K tokens</span>
              </div>
              <button className="model-btn">使用</button>
            </div>
          </SettingsCard>
        ))}
      </div>
    </div>
  )
}
