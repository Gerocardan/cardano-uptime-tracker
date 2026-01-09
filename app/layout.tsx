import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Cardano Uptime Tracker',
  description: 'Real-time Cardano network uptime tracker since Byron genesis block with downtime events.',
  openGraph: {
    title: 'Cardano Uptime Tracker',
    description: 'Track Cardano network uptime in real-time since Byron genesis block.',
    url: 'https://cardano-uptime-tracker.example.com',
    siteName: 'Cardano Uptime Tracker',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cardano Uptime Tracker',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardano Uptime Tracker',
    description: 'Track Cardano network uptime in real-time since Byron genesis block.',
    images: ['/og-image.png'],
  },
  themeColor: '#000814',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#000814" />
      </head>
      <body className="bg-cardano-dark text-white font-sans min-h-screen">
        {children}
      </body>
    </html>
  )
}