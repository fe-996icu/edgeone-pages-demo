import { SettingsCard } from '../../components/settings'

const faqs = [
  {
    q: '如何计算API调用费用？',
    a: 'API费用 = 输入tokens × 输入单价 + 输出tokens × 输出单价。系统会根据实际使用的tokens数量进行计费，采用后付费方式。'
  },
  {
    q: '请求频率有限制吗？',
    a: '免费用户每分钟最多60次请求，VIP用户每分钟最多600次请求。如需更高配额，请联系客服。'
  },
  {
    q: '如何查看API使用明细？',
    a: '进入「控制台 → 使用日志」，可以查看每次API调用的详细信息，包括时间、模型、tokens用量和费用。'
  },
  {
    q: 'API密钥丢失怎么办？',
    a: '如果API密钥丢失，请进入「控制台 → 令牌管理」，删除旧密钥并创建新的密钥。'
  },
  {
    q: '支持哪些支付方式？',
    a: '目前支持支付宝、微信支付、银行卡转账等多种支付方式。具体请前往「控制台 → 钱包管理」了解。'
  },
  {
    q: '如何申请退款？',
    a: '未使用的额度可以在购买后7天内申请退款。如需退款，请联系客服处理。'
  },
]

export function FaqPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div className="settings-tab-item" style={{ fontSize: '20px', fontWeight: '700', padding: 0, border: 'none' }}>常见问题</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqs.map((faq, i) => (
          <SettingsCard key={i}>
            <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '8px' }}>
              {faq.q}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              {faq.a}
            </div>
          </SettingsCard>
        ))}
      </div>
    </div>
  )
}
