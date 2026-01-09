"use client"

import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex-shrink-0 text-orange-500 font-extrabold text-2xl tracking-tight font-sans">
          Cardano Uptime
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-400 text-sm font-medium">
          <a href="#" className="hover:text-orange-400 transition-colors">Home</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Uptime</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Tools</a>
          <a href="#" className="hover:text-orange-400 transition-colors">About</a>
        </nav>
        <div className="flex items-center space-x-2 text-gray-400 text-sm font-medium">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span>Live</span>
        </div>
      </div>
    </header>
  )
}
