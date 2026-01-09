# Cardano Uptime Tracker - Next.js Version

This is a modern Next.js 14+ application tracking Cardano network uptime since the Byron genesis block (2017-09-29T21:00:00Z). It features real-time uptime percentage updates, a historical uptime chart, downtime events, and days since last downtime.

## Features

- Real-time updating uptime percentage with subtle animation
- Responsive uptime history line chart using Recharts
- List of known downtime events with descriptions and links
- Days since last downtime event display
- Dark theme with Cardano brand colors
- Accessibility best practices and semantic HTML
- Metadata optimized for social sharing (Open Graph, Twitter)
- Tailwind CSS with Cardano color palette
- TypeScript strict mode with clean architecture
- Ready for deployment on Vercel or via Docker

## Project Structure

```
cardano-uptime-tracker-next/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── UptimeDisplay.tsx
│   ├── UptimeChart.tsx
│   ├── DowntimeEvents.tsx
│   └── DaysSinceLast.tsx
├── lib/
│   ├── uptime.ts
│   ├── constants.ts (optional)
│   └── types.ts (optional)
├── public/
│   ├── favicon.ico
│   └── og-image.png
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Deployment

- **Vercel:** Recommended for zero-config deployment. Just connect your GitHub repo and deploy.
- **Docker:** Use the existing Dockerfile adapted for Next.js build output.

## Notes

- The uptime calculation logic is in `lib/uptime.ts` for easy testing and maintenance.
- Components are split for separation of concerns and reusability.
- Tailwind CSS is configured with Cardano brand colors.
- Real-time updates use React client components with framer-motion for animation.

## Future Improvements

- Add unit and integration tests for uptime logic and components.
- Enhance chart with more granular data points and tooltips.
- Add dark/light theme toggle.
- Support multiple downtime events dynamically fetched from an API.

---

© 2026 Cardano Uptime Tracker