/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cardano: {
          blue: "#0033AD",
          light: "#0A1A2F",
          dark: "#000814",
        }
      }
    },
  },
  plugins: [],
}