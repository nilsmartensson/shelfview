// TODO: Replace props with data from GET /api/v1/findings/summary

function StatCard({ value, label, icon }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-4">
      <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-semibold text-gray-900 leading-none tabular-nums">
          {value}
        </div>
        <div className="text-xs text-gray-500 mt-1">{label}</div>
      </div>
    </div>
  )
}

export default function SummaryBar({ totalFindings, resellersAffected, lastScan }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <StatCard
        value={totalFindings}
        label="Outdated images found"
        icon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
            <path
              d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 9v4M12 17h.01"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        }
      />
      <StatCard
        value={resellersAffected}
        label="Resellers affected"
        icon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
            <path
              d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
      <StatCard
        value={lastScan}
        label="Last scan"
        icon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M12 7v5l3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
    </div>
  )
}
