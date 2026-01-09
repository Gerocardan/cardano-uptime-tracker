import React from 'react'
import UptimeChart from '../components/UptimeChart'
import DowntimeEvents from '../components/DowntimeEvents'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-24 pb-16 font-sans space-y-16">
      <section className="text-center">
        <h1 className="text-orange-500 font-extrabold text-6xl sm:text-7xl leading-tight tracking-tight drop-shadow-[0_0_10px_rgba(247,147,26,0.7)]">
          Cardano Uptime
        </h1>
      </section>

      <section>
        <UptimeChart />
      </section>

      <section>
        <DowntimeEvents />
      </section>
    </main>
  )
}