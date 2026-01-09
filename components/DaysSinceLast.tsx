import React from 'react'
import { calculateUptime } from '../lib/uptime'

export default function DaysSinceLast() {
  const { daysSinceLast } = calculateUptime()

  return (
    <section
      aria-label="Days since last downtime event"
      className="bg-cardano-blue/20 rounded-xl p-8 flex flex-col items-center justify-center"
    >
      <p className="text-gray-400 text-center mb-4">Last downtime event</p>
      <p className="text-6xl font-bold text-green-400" aria-live="polite" aria-atomic="true">
        {daysSinceLast}
      </p>
      <p className="text-gray-400 mt-2">days ago</p>
    </section>
  )
}