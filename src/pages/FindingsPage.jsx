import { useState, useMemo } from 'react'
import { mockFindings } from '../data/mockFindings'
import SummaryBar from '../components/SummaryBar'
import FindingsTable from '../components/FindingsTable'

// TODO: Replace useState(mockFindings) with a useEffect fetch to GET /api/v1/findings
export default function FindingsPage() {
  const [findings, setFindings] = useState(mockFindings)

  const handleSendRequest = (findingId) => {
    // TODO: Call POST /api/v1/outreach/request with { findingId } before updating local state
    setFindings((prev) =>
      prev.map((f) => (f.id === findingId ? { ...f, status: 'Contacted' } : f))
    )
  }

  const summary = useMemo(
    () => ({
      totalFindings: findings.length,
      resellersAffected: new Set(findings.map((f) => f.reseller.domain)).size,
      lastScan: '28 Feb 2026, 09:14',
    }),
    [findings]
  )

  const newCount = findings.filter((f) => f.status === 'New').length

  return (
    <div className="p-10">
      {/* Page header */}
      <div className="mb-7">
        <h1 className="text-xl font-semibold text-gray-900">Findings</h1>
        <p className="text-sm text-gray-500 mt-1">
          {newCount > 0
            ? `Update required: ${newCount} reseller${newCount !== 1 ? 's' : ''} with outdated images`
            : 'All findings have been addressed — no action needed.'}
        </p>
      </div>

      {/* Summary stats */}
      <div className="mb-6">
        <SummaryBar
          totalFindings={summary.totalFindings}
          resellersAffected={summary.resellersAffected}
          lastScan={summary.lastScan}
        />
      </div>

      {/* Findings table */}
      <FindingsTable findings={findings} onSendRequest={handleSendRequest} />
    </div>
  )
}
