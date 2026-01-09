"use client"

import UptimeDisplay from '../components/UptimeDisplay'
import DowntimeEvents from '../components/DowntimeEvents'
import UptimeChart from '../components/UptimeChart'
import DaysSinceLast from '../components/DaysSinceLast'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Cardano Uptime Tracker</h1>
      <UptimeDisplay />
      <UptimeChart />
      <DaysSinceLast />
      <DowntimeEvents />
      <p className="mt-8 text-xs text-gray-400 max-w-prose">
        Cardano has never experienced a full network halt. Shown uptime is conservatively adjusted for known brief periods of degraded block production density (usually <1 hour). Real effective uptime is effectively 100% for transaction finality.
      </p>
    </main>
  )
}