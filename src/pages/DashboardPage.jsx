// TODO: Build full Dashboard with scan trend chart, product breakdown, and recent activity feed

export default function DashboardPage() {
  return (
    <div className="p-10">
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Your brand compliance overview at a glance.</p>
      </div>

      <div className="border-2 border-dashed border-gray-200 rounded-2xl p-20 text-center">
        <div className="w-10 h-10 bg-gray-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24">
            <path
              d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-gray-500">Dashboard coming soon</p>
        <p className="text-xs text-gray-400 mt-1">
          Scan trends, compliance scores, and product breakdowns will appear here.
        </p>
      </div>
    </div>
  )
}
