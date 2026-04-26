import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout, DashboardLayout, AdminLayout } from './components/layout'
import { SettingsPage } from './pages/Settings'
import { TopbarSettings } from './pages/Settings/TopbarSettings'
import { SidebarSettings } from './pages/Settings/SidebarSettings'
import { FilterSettings } from './pages/Settings/FilterSettings'
import { LogSettings } from './pages/Settings/LogSettings'
import { MonitorSettings } from './pages/Settings/MonitorSettings'
import { QuotaSettings } from './pages/Settings/QuotaSettings'
import { CheckinSettings } from './pages/Settings/CheckinSettings'
import { HomePage } from './pages/Home'
import { ModelSquarePage } from './pages/ModelSquare'
import { ChatModelsPage } from './pages/ModelSquare/ChatModels'
import { ImageModelsPage } from './pages/ModelSquare/ImageModels'
import { EmbeddingModelsPage } from './pages/ModelSquare/EmbeddingModels'
import { DocsPage } from './pages/Docs'
import { QuickstartPage } from './pages/Docs/Quickstart'
import { ApiReferencePage } from './pages/Docs/ApiReference'
import { SdkDownloadPage } from './pages/Docs/SdkDownload'
import { FaqPage } from './pages/Docs/Faq'
import { AboutPage } from './pages/About'
import { DataBoardPage } from './pages/Dashboard/DataBoard'
import { TokenManagementPage } from './pages/Dashboard/TokenManagement'
import { UsageLogsPage } from './pages/Dashboard/UsageLogs'
import { DrawingLogsPage } from './pages/Dashboard/DrawingLogs'
import { WalletPage } from './pages/Dashboard/Wallet'
import { ProfilePage } from './pages/Dashboard/Profile'
import { ChannelManagementPage } from './pages/Admin/ChannelManagement'
import { ModelManagementPage } from './pages/Admin/ModelManagement'
import { ModelDeploymentPage } from './pages/Admin/ModelDeployment'
import { RedeemCodeManagementPage } from './pages/Admin/RedeemCodeManagement'
import { UserManagementPage } from './pages/Admin/UserManagement'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DataBoardPage />} />
          <Route path="tokens" element={<TokenManagementPage />} />
          <Route path="usage-logs" element={<UsageLogsPage />} />
          <Route path="drawing-logs" element={<DrawingLogsPage />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        <Route path="/model-square" element={<Layout />}>
          <Route index element={<ModelSquarePage />} />
          <Route path="chat" element={<ChatModelsPage />} />
          <Route path="image" element={<ImageModelsPage />} />
          <Route path="embedding" element={<EmbeddingModelsPage />} />
        </Route>

        <Route path="/docs" element={<Layout />}>
          <Route index element={<DocsPage />} />
          <Route path="quickstart" element={<QuickstartPage />} />
          <Route path="api" element={<ApiReferencePage />} />
          <Route path="sdk" element={<SdkDownloadPage />} />
          <Route path="faq" element={<FaqPage />} />
        </Route>

        <Route path="/settings" element={<Layout />}>
          <Route index element={<SettingsPage />} />
          <Route path="topbar" element={<TopbarSettings />} />
          <Route path="sidebar" element={<SidebarSettings />} />
          <Route path="filter" element={<FilterSettings />} />
          <Route path="logs" element={<LogSettings />} />
          <Route path="monitor" element={<MonitorSettings />} />
          <Route path="quota" element={<QuotaSettings />} />
          <Route path="checkin" element={<CheckinSettings />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<ChannelManagementPage />} />
          <Route path="channels" element={<ChannelManagementPage />} />
          <Route path="models" element={<ModelManagementPage />} />
          <Route path="deployments" element={<ModelDeploymentPage />} />
          <Route path="redeem-codes" element={<RedeemCodeManagementPage />} />
          <Route path="users" element={<UserManagementPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
