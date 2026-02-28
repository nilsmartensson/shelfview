const CONFIDENCE_STYLES = {
  High: 'bg-green-50 text-green-700 border-green-200',
  Medium: 'bg-amber-50 text-amber-700 border-amber-200',
  Low: 'bg-red-50 text-red-700 border-red-200',
}

const STATUS_CONFIG = {
  New: { dot: 'bg-blue-400', label: 'New', text: 'text-gray-700' },
  Contacted: { dot: 'bg-amber-400', label: 'Contacted', text: 'text-gray-700' },
  Resolved: { dot: 'bg-green-500', label: 'Resolved', text: 'text-gray-500' },
}

export function ConfidencePill({ confidence }) {
  const style = CONFIDENCE_STYLES[confidence] ?? CONFIDENCE_STYLES.Low
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${style}`}
    >
      {confidence}
    </span>
  )
}

export function StatusIndicator({ status }) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.New
  return (
    <div className="flex items-center gap-1.5">
      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${config.dot}`} />
      <span className={`text-sm ${config.text}`}>{config.label}</span>
    </div>
  )
}
