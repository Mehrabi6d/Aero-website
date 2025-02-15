"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000) // 1 second delay

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-MunqRZAbuSLKtH2pkjWLvnJrhtEswJ.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 sm:mb-6 text-gradient">Aero</h1>
        <p className="text-xl sm:text-2xl mb-8 sm:mb-10">Play to earn, not just to win.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <Link
            href="/play"
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 text-sm sm:text-base hover-scale"
          >
            Start Playing
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300 text-sm sm:text-base hover-scale"
          >
            Explore Aero
          </Link>
          <Link
            href="/whitepaper"
            className="w-full sm:w-auto bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300 text-sm sm:text-base hover-scale"
          >
            Read Whitepaper
          </Link>
        </div>
      </div>
    </section>
  )
}

