import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cardano: {
          blue: '#0033AD',
          light: '#0A1A2F',
          dark: '#000814',
        },
        greenUptime: '#10B981',
      },
    },
  },
  plugins: [],
}

export default config