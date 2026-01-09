/**
 * lib/constants.ts
 * 
 * Contains Cardano genesis timestamp and known rare transient network events.
 * Cardano mainnet has maintained 100% uptime since launch (no full halts, no coordinated network-wide restarts required).
 * All dates are in UTC.
 */

/**
 * Rare transient events involving brief degradations, slowdowns, node restarts, or temporary partitions.
 * These self-resolved via Ouroboros design, automatic recovery, or decentralized node upgrades,
 * without ever stopping block production network-wide.
 */
export interface NetworkEvent {
  name: string;
  date: Date;
  durationMinutes: number;  // Approximate impact duration (slowdown/partition time)
  description: string;
  url?: string;
}

// Cardano Byron genesis timestamp (UTC)
export const BYRON_GENESIS_DATE = new Date("2017-09-29T21:00:00Z");

// Known rare transient events on Cardano mainnet
export const NETWORK_EVENTS: NetworkEvent[] = [
  {
    name: "2020 Early Shelley Minor Degradation",
    date: new Date("2020-07-30T00:00:00Z"), // Following Shelley hard fork on July 29, 2020 ~21:44 UTC
    durationMinutes: 15,
    description: 
      "Minor performance hiccups and initial slowdowns during the Shelley hard fork transition " +
      "to decentralization (early epochs). The network remained operational with block production continuing; " +
      "normal part of a major upgrade phase, no full outage.",
    url: "https://forum.cardano.org/t/and-so-it-begins-reflections-on-this-first-shelley-epoch/37544"
  },
  {
    name: "2021 Epoch Boundary Computation Overload",
    date: new Date("2021-04-15T21:30:00Z"),
    durationMinutes: 20,
    description: 
      "Temporary CPU spikes and minor sync/block production delays around epoch boundaries " +
      "due to reward computation load in early node versions. Blocks continued to be produced; " +
      "issue resolved via subsequent node software updates.",
    url: "https://github.com/IntersectMBO/cardano-node/issues/2616"
  },
  {
    name: "2023 Transient Node Restart Incident",
    date: new Date("2023-01-22T00:09:00Z"),
    durationMinutes: 2,
    description: 
      "Transient ledger anomaly (multi-asset data handling bug) caused ~50% of nodes to auto-disconnect and restart. " +
      "Block production experienced only a very brief pause (comparable to normal epoch boundary delays); " +
      "full automatic recovery without intervention, proving network resilience.",
    url: "https://updates.cardano.intersectmbo.org/2023-04-17-ledger/"
  },
  {
    name: "2025 Malformed Transaction Chain Partition",
    date: new Date("2025-11-21T08:00:00Z"),
    durationMinutes: 870, // ~14.5 hours until full convergence (block production continued on healthy branch)
    description: 
      "A deliberately malformed 'poisoned' delegation transaction exploited a dormant deserialization bug " +
      "(from ~2022), causing a temporary chain partition (split into 'healthy' and 'poisoned' branches). " +
      "Block production continued uninterrupted on the healthy branch; network converged back via decentralized " +
      "node upgrades (to v10.5.2/v10.5.3) by SPOs and ecosystem participants. No funds lost, no full downtime — " +
      "demonstrated Ouroboros robustness and decentralized recovery.",
    url: "https://www.intersectmbo.org/news/cardano-mainnet-incident-facts-at-a-glance"
  }
];