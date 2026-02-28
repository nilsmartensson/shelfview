import { useState } from 'react'
import { ConfidencePill, StatusIndicator } from './StatusPill'

function ScreenshotModal({ url, product, reseller, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-2xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">{product}</p>
            <p className="text-xs text-gray-500 mt-0.5">{reseller}</p>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-md flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Close preview"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
              <path
                d="M18 6 6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Screenshot */}
        <div className="p-4">
          <img
            src={url}
            alt={`${product} on ${reseller} — reseller page screenshot`}
            className="w-full rounded-lg object-cover"
          />
          <p className="text-xs text-gray-400 mt-3 text-center">
            Reseller product page — captured during last scan
          </p>
        </div>
      </div>
    </div>
  )
}

const TABLE_HEADERS = [
  'Product',
  'Reseller',
  'Confidence',
  'Detected',
  'Preview',
  'Status',
  'Action',
]

// TODO: Wire onSendRequest to POST /api/v1/outreach/request
export default function FindingsTable({ findings, onSendRequest }) {
  const [expandedScreenshot, setExpandedScreenshot] = useState(null)

  return (
    <>
      {expandedScreenshot && (
        <ScreenshotModal
          url={expandedScreenshot.url}
          product={expandedScreenshot.product}
          reseller={expandedScreenshot.reseller}
          onClose={() => setExpandedScreenshot(null)}
        />
      )}

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                {TABLE_HEADERS.map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide whitespace-nowrap"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {findings.map((finding) => (
                <tr
                  key={finding.id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  {/* Product */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={finding.product.thumbnail}
                        alt={finding.product.name}
                        className="w-9 h-9 rounded-md object-cover bg-gray-100 flex-shrink-0"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 whitespace-nowrap">
                          {finding.product.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5 font-mono">
                          {finding.product.sku}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Reseller */}
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-gray-900">{finding.reseller.domain}</p>
                    <a
                      href={finding.reseller.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-indigo-500 hover:text-indigo-700 mt-0.5 block truncate max-w-[200px] transition-colors"
                      title={finding.reseller.url}
                    >
                      {finding.reseller.url}
                    </a>
                  </td>

                  {/* Confidence */}
                  <td className="px-4 py-3">
                    <ConfidencePill confidence={finding.confidence} />
                  </td>

                  {/* Date detected */}
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-600 whitespace-nowrap">
                      {new Date(finding.dateDetected).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </td>

                  {/* Screenshot preview */}
                  <td className="px-4 py-3">
                    <button
                      onClick={() =>
                        setExpandedScreenshot({
                          url: finding.screenshotUrl,
                          product: finding.product.name,
                          reseller: finding.reseller.domain,
                        })
                      }
                      className="group/thumb relative block"
                      title="Click to expand screenshot"
                    >
                      <img
                        src={finding.screenshotUrl}
                        alt="Screenshot preview"
                        className="w-16 h-10 rounded object-cover bg-gray-100 group-hover/thumb:ring-2 group-hover/thumb:ring-indigo-400 transition-all"
                      />
                      <div className="absolute inset-0 rounded flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 bg-black/20 transition-opacity">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24">
                          <path
                            d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <StatusIndicator status={finding.status} />
                  </td>

                  {/* Action */}
                  <td className="px-4 py-3">
                    {finding.status === 'New' && (
                      <button
                        onClick={() => onSendRequest(finding.id)}
                        className="text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap"
                      >
                        Send update request
                      </button>
                    )}
                    {finding.status === 'Contacted' && (
                      <span className="text-xs text-gray-400 font-medium">Request sent</span>
                    )}
                    {finding.status === 'Resolved' && (
                      <span className="text-xs text-green-600 font-medium">Resolved</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {findings.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-sm text-gray-400">No findings to display.</p>
            </div>
          )}
        </div>

        {/* Table footer */}
        <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            {findings.length} finding{findings.length !== 1 ? 's' : ''}
          </p>
          <p className="text-xs text-gray-400">
            {findings.filter((f) => f.status === 'New').length} awaiting action
          </p>
        </div>
      </div>
    </>
  )
}
