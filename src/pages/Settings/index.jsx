import { Topbar, Sidebar } from '../../components/layout'
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
    <div className="settings-page">
      <Topbar />
      <Sidebar />
      <main className="main-content">
        <div className="settings-content">
          <div className="settings-tabs">
            <div className="settings-tab active">运营设置</div>
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
      </main>
    </div>
  )
}
