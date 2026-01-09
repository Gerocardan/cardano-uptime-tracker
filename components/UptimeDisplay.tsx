"use client"

import { calculateUptime } from '../lib/uptime'

export default function UptimeDisplay() {
  const { formatted } = calculateUptime()

  return (
    <div className="text-center text-4xl font-mono font-bold text-cardano-blue">
      {formatted}%
    </div>
  )
}