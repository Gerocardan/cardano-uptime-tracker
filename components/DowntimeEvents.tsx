"use client"

import { NETWORK_EVENTS, NetworkEvent } from '../lib/constants'

export default function DowntimeEvents() {
  return (
    <section aria-labelledby="downtime-events-title" className="bg-cardano-light/10 rounded-xl p-8">
      <h3 id="downtime-events-title" className="text-xl font-bold mb-4">
        Downtime events
      </h3>
      <div className="space-y-6">
        {NETWORK_EVENTS.map((event: NetworkEvent) => (
          <article key={event.name}>
            <p className="text-yellow-400 font-semibold">
              {event.date.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}{' '}
              Downtime Event
            </p>
            <p className="text-sm text-gray-300 mt-1">{event.description}</p>
            {event.url && (
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 text-sm mt-2 inline-block hover:underline"
              >
                Learn more →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}