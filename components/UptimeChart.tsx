"use client"

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { NETWORK_EVENTS, BYRON_GENESIS_DATE } from '../lib/constants'

interface ChartDataPoint {
  yearFraction: number
  uptimePercent: number
}

function dateToYearFraction(date: Date): number {
  const year = date.getUTCFullYear()
  const startOfYear = Date.UTC(year, 0, 1)
  const endOfYear = Date.UTC(year + 1, 0, 1)
  const yearLength = endOfYear - startOfYear
  return year + (date.getTime() - startOfYear) / yearLength
}

export default function UptimeChart() {
  const now = new Date()
  const genesisYearFraction = dateToYearFraction(BYRON_GENESIS_DATE)
  const nowYearFraction = dateToYearFraction(now)

  // Build data points: mostly 100%, with sharp dips to 0% at event times (approximate)
  const data: ChartDataPoint[] = [
    { yearFraction: genesisYearFraction, uptimePercent: 100 },
  ]

  NETWORK_EVENTS.forEach(event => {
    const eventYearFraction = dateToYearFraction(event.date)
    // Add a dip point just before event
    data.push({ yearFraction: eventYearFraction - 0.0001, uptimePercent: 100 })
    // Dip to 0% during event
    data.push({ yearFraction: eventYearFraction, uptimePercent: 0 })
    // Back to 100% just after event
    data.push({ yearFraction: eventYearFraction + 0.0001, uptimePercent: 100 })
  })

  // Add current time point
  data.push({ yearFraction: nowYearFraction, uptimePercent: 100 })

  return (
    <div className="w-full h-48 my-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="yearFraction"
            type="number"
            domain={[genesisYearFraction, nowYearFraction]}
            tickFormatter={(val: number) => val.toFixed(2)}
            allowDecimals={true}
          />
          <YAxis domain={[0, 100]} tickFormatter={(val: number) => `${val}%`} />
          <Tooltip
            formatter={(value: number) => `${value.toFixed(2)}%`}
            labelFormatter={(label: number) => `Year: ${label.toFixed(3)}`}
          />
          <Line
            type="stepAfter"
            dataKey="uptimePercent"
            stroke="#0033ad"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}