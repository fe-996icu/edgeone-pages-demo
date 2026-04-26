import { GeneralSettings } from './GeneralSettings'
import { TopbarSettings } from './TopbarSettings'
import { SidebarSettings } from './SidebarSettings'
import { FilterSettings } from './FilterSettings'
import { LogSettings } from './LogSettings'
import { MonitorSettings } from './MonitorSettings'
import { QuotaSettings } from './QuotaSettings'
import { CheckinSettings } from './CheckinSettings'
import './SettingsPage.css'

export function SettingsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">运营设置</h1>
      </div>
      <GeneralSettings />
      <TopbarSettings />
      <SidebarSettings />
      <FilterSettings />
      <LogSettings />
      <MonitorSettings />
      <QuotaSettings />
      <CheckinSettings />
    </div>
  )
}
