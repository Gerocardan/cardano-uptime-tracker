"use client"

import React, { useEffect, useState } from 'react'

export default function LiveStatus() {
  const [secondsAgo, setSecondsAgo] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsAgo(prev => (prev + 1) % 600)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center space-x-2 text-gray-400 text-sm font-medium">
      <svg className="animate-spin h-4 w-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
      <span>Last checked {secondsAgo} seconds ago</span>
    </div>
  )
}