import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import FindingsPage from './pages/FindingsPage'
import DashboardPage from './pages/DashboardPage'

function PlaceholderPage({ title }) {
  return (
    <div className="p-10">
      <h1 className="text-xl font-semibold text-gray-900 mb-2">{title}</h1>
      <div className="border-2 border-dashed border-gray-200 rounded-xl p-16 text-center mt-6">
        <p className="text-gray-400 text-sm font-medium">{title} — coming soon</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-50 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/findings" element={<FindingsPage />} />
            <Route path="/products" element={<PlaceholderPage title="Products" />} />
            <Route path="/resellers" element={<PlaceholderPage title="Resellers" />} />
            <Route path="/outreach" element={<PlaceholderPage title="Outreach" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
