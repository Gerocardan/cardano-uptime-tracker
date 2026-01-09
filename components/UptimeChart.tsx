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

import React, { useEffect, useState } from 'react'

export default function UptimeChart() {
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

  const [data, setData] = useState<ChartDataPoint[]>([])

  useEffect(() => {
    let intervalId: number

    async function fetchUptimeData() {
      try {
        // Example API endpoint - replace with actual cexplorer API URL
        const response = await fetch('https://cexplorer.io/api/uptime')
        const json = await response.json()

        // Process json to build data array of { yearFraction, uptimePercent }
        // This is a placeholder; adapt based on actual API response structure
        const processedData: ChartDataPoint[] = json.map((item: any) => ({
          yearFraction: dateToYearFraction(new Date(item.date)),
          uptimePercent: item.uptimePercent,
        }))

        setData(processedData)
      } catch (error) {
        console.error('Failed to fetch uptime data:', error)
      }
    }

    fetchUptimeData()
    intervalId = window.setInterval(fetchUptimeData, 10000) // fetch every 10 seconds

    return () => clearInterval(intervalId)
  }, [])

  if (data.length === 0) {
    return <div className="text-gray-400">Loading uptime chart...</div>
  }

  const genesisYearFraction = dateToYearFraction(new Date('2017-09-29T21:00:00Z'))
  const nowYearFraction = dateToYearFraction(new Date())

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