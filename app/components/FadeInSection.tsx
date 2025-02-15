"use client"

import { useRef } from "react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import type React from "react" // Added import for React

export default function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 })

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ${isIntersecting ? "opacity-100" : "opacity-0"}`}>
      {children}
    </div>
  )
}

