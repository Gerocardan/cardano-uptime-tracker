import { useState, useEffect } from 'react'
import { LineChart, Line } from 'recharts'

const CARDANO_BYRON_GENESIS = new Date('2017-09-29T21:00:00Z').getTime()
const DOWNTIME_EVENTS = [
  {
    date: new Date('2024-02-04T02:30:00Z'),
    duration: 45 * 60 * 1000, // 45 minutes in ms
    name: "Feb 2024 Node Crash",
    description: "Node v.1.34.1 bug caused ~60% of stake pools to restart during epoch transition."
  }
]

function calculateUptime() {
  const now = Date.now()
  const totalTime = now - CARDANO_BYRON_GENESIS
  const totalDowntime = DOWNTIME_EVENTS.reduce((sum, e) => sum + e.duration, 0)
  const uptimeMs = totalTime - totalDowntime
  const uptimePercent = (uptimeMs / totalTime) * 100

  const daysSinceLast = Math.floor((now - DOWNTIME_EVENTS[0].date.getTime()) / (1000 * 60 * 60 * 24))

  return {
    percent: uptimePercent,
    totalDays: Math.floor(totalTime / (1000 * 60 * 60 * 24)),
    daysSinceLast,
    formatted: uptimePercent.toFixed(10)
  }
}

export default function App() {
  const [uptime, setUptime] = useState(calculateUptime())

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(calculateUptime())
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const chartData = [
    { year: 2017, uptime: 100 },
    { year: 2018, uptime: 100 },
    ...DOWNTIME_EVENTS.map(e => ({
      year: e.date.getFullYear() + e.date.getMonth() / 12,
      uptime: 0
    })),
    { year: new Date().getFullYear() + new Date().getMonth() / 12, uptime: 100 }
  ]

  return (
    <>
      <div className="min-h-screen bg-cardano-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center mb-2">Cardano Uptime Tracker</h1>
          <p className="text-center text-gray-400 mb-16">
            The Cardano network has been functional for
          </p>

          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-6 text-7xl font-bold">
              <span className="text-green-400 text-6xl">Check</span>
              <span>{uptime.formatted}%</span>
            </div>
            <p className="text-gray-400 mt-4 text-lg">
              of the time since the first Byron block on September 29, 2017 at 21:00 UTC
            </p>
          </div>

          <div className="mb-20 bg-cardano-light/20 rounded-2xl p-8">
            <LineChart width={1000} height={200} data={chartData} margin={{ top: 20 }}>
              <Line 
                type="monotone" 
                dataKey="uptime" 
                stroke="#10b981" 
                strokeWidth={4}
                dot={false}
              />
            </LineChart>
            <div className="flex justify-center gap-12 mt-8 text-sm text-gray-400">
              <span>2017</span>
              <span>2020</span>
              <span>2024</span>
              <span>→</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-cardano-light/10 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Downtime events</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-yellow-400 font-semibold">4 Feb 2024 Downtime Event</p>
                  <p className="text-sm text-gray-300 mt-1">
                    {DOWNTIME_EVENTS[0].description}
                  </p>
                  <a href="https://iohk.io/en/blog/posts/2024/02/05/no-shelley-maiden-voyage-would-be-complete-without-a-storm/" 
                     className="text-yellow-400 text-sm mt-2 inline-block hover:underline">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-cardano-blue/20 rounded-xl p-8 flex flex-col items-center justify-center">
              <p className="text-gray-400 text-center mb-4">Last downtime event</p>
              <p className="text-6xl font-bold text-green-400">
                {uptime.daysSinceLast}
              </p>
              <p className="text-gray-400 mt-2">days ago</p>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-20">
            Cardano has been live for {uptime.totalDays} days with only one 45-minute halt.
          </p>
        </div>
      </div>
    </>
  )
}