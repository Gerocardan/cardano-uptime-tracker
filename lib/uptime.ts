import { BYRON_GENESIS_DATE, NETWORK_EVENTS, NetworkEvent } from './constants'

export interface UptimeStats {
  percent: number
  totalDays: number
  daysSinceLast: number
  formatted: string
  lastEvent?: NetworkEvent
}

/**
 * Calculates Cardano network uptime percentage based on known degraded performance events.
 * Uses millisecond precision and returns detailed stats.
 */
export function calculateUptime(): UptimeStats {
  const now = Date.now()
  const genesisTime = BYRON_GENESIS_DATE.getTime()
  const totalMs = now - genesisTime

  // Sum total degraded time in milliseconds from known events
  const degradedMs = NETWORK_EVENTS.reduce((sum, event) => {
    return sum + event.durationMinutes * 60 * 1000
  }, 0)

  const uptimeMs = totalMs - degradedMs
  const uptimePercent = (uptimeMs / totalMs) * 100

  // Find the most recent event before now
  const pastEvents = NETWORK_EVENTS.filter(event => event.date.getTime() <= now)
  const lastEvent = pastEvents.length > 0 ? pastEvents[pastEvents.length - 1] : undefined

  // Calculate days since last event
  const daysSinceLast = lastEvent
    ? Math.floor((now - lastEvent.date.getTime()) / (1000 * 60 * 60 * 24))
    : Math.floor(totalMs / (1000 * 60 * 60 * 24))

  return {
    percent: uptimePercent,
    totalDays: Math.floor(totalMs / (1000 * 60 * 60 * 24)),
    daysSinceLast,
    formatted: uptimePercent.toFixed(10),
    lastEvent,
  }
}