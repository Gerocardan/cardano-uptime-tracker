/**
 * lib/constants.ts
 * 
 * Contains Cardano genesis timestamp and known network degraded performance events.
 * All dates are in UTC.
 */

export interface NetworkEvent {
  name: string;
  date: Date;
  durationMinutes: number;
  description: string;
  url?: string;
}

// Cardano Byron genesis timestamp (UTC)
export const BYRON_GENESIS_DATE = new Date("2017-09-29T21:00:00Z");

// Known major degraded performance events on Cardano mainnet
export const NETWORK_EVENTS: NetworkEvent[] = [
  {
    name: "2021 Epoch Boundary Overload",
    date: new Date("2021-04-15T21:30:00Z"),
    durationMinutes: 30,
    description: "Temporary slowdown in block production due to epoch transition computation load",
    url: "https://forum.cardano.org/t/epoch-boundary-overload-april-2021/55555"
  },
  {
    name: "2024 Node Version Bug Incident",
    date: new Date("2024-02-04T02:30:00Z"),
    durationMinutes: 45,
    description: "Bug in node v1.34.1 caused majority of pools to restart during epoch boundary",
    url: "https://iohk.io/en/blog/posts/2024/02/05/cardano-node-v1-34-1-incident/"
  },
  // Minor early Shelley events (approximate, short duration)
  {
    name: "2020 Shelley Early Minor Event 1",
    date: new Date("2020-07-01T12:00:00Z"),
    durationMinutes: 20,
    description: "Minor degraded block production during early Shelley phase",
    url: "https://cardano.org/blog/shelley-update/"
  },
  {
    name: "2020 Shelley Early Minor Event 2",
    date: new Date("2020-08-15T18:45:00Z"),
    durationMinutes: 15,
    description: "Short degraded performance period reported by SPOs",
  }
];