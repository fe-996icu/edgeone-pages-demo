import { Button } from '../../components/common'
import { SettingsCard, NavSection } from '../../components/settings'

export function SidebarSettings() {
  return (
    <SettingsCard
      title="侧边栏管理(全局控制)"
      actions={
        <>
          <Button variant="secondary">重置为默认</Button>
          <Button>保存设置</Button>
        </>
      }
    >
      <NavSection
        title="聊天区域"
        items={[
          { title: '首页', description: '用户主页，展示系统信息', enabled: true },
          { title: '控制台', description: '用户控制面板，管理账户', enabled: true },
        ]}
        enabled={true}
        onToggle={() => {}}
      />
      <NavSection
        title="控制台区域"
        items={[
          { title: '数据看板', description: '系统数据统计', enabled: true },
          { title: '令牌管理', description: 'API令牌管理', enabled: true },
          { title: '使用日志', description: 'API使用记录', enabled: true },
          { title: '绘图日志', description: '绘图任务记录', enabled: true },
        ]}
        enabled={true}
        onToggle={() => {}}
      />
      <NavSection
        title="个人中心区域"
        items={[
          { title: '钱包管理', description: '余额重置管理', enabled: true },
          { title: '个人设置', description: '个人信息设置', enabled: true },
        ]}
        enabled={true}
        onToggle={() => {}}
      />
      <NavSection
        title="管理员区域"
        items={[
          { title: '渠道管理', description: 'API渠道配置', enabled: true },
          { title: '模型管理', description: 'AI模型配置', enabled: true },
          { title: '模型部署', description: '模型部署管理', enabled: true },
          { title: '兑换码管理', description: '兑换码生成管理', enabled: true },
          { title: '用户管理', description: '用户账户管理', enabled: true },
          { title: '系统设置', description: '系统参数配置', enabled: true },
        ]}
        enabled={true}
        onToggle={() => {}}
      />
    </SettingsCard>
  )
}
